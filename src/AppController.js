import {autorun, makeAutoObservable, runInAction} from "mobx"
import AppPagePresenter, {PageId, PageObjcet} from "page/PagePresenter"
import AppMetamaskManager from "store/manager/metamask/MetamaskManager"
import * as Metamask from "store/manager/metamask/Metamask"
import AppDataProvider, {DataRequest} from "store/provider/DataProvider"
import * as Rest from "store/rest/Rest"
import User from "store/provider/model/User"


class AppController {
    constructor() {
        this.createObservable()
        this.TAG = "AppController"
        this.joinRetryCount = 0
        this.initApp()
        this.subscribe()
    }

    createObservable(){
        this.dataProvider = AppDataProvider()
        this.metamaskManager = AppMetamaskManager()
        makeAutoObservable(this)
    }

    initApp(){
        console.log(this.TAG, 'this.metamaskManager.status ' + this.metamaskManager.status)
        switch ( this.metamaskManager.status){
            case Metamask.Status.disconnect :
                this.metamaskManager.requestQ(Metamask.Request.autoConnect)
                break
            default : break

        }
    }

    subscribe(){

        this.disposer = autorun(() => {
            if (this.metamaskManager.event != null) {
                runInAction(() => {
                    switch (this.metamaskManager.event) {
                        case Metamask.Event.installed :
                            alert("please reload page")
                            break

                        case Metamask.Event.connected :
                            alert("Metamask connected")
                            AppPagePresenter().closePopupByPageId(PageId.Login)
                            this.metamaskManager.requestQ(Metamask.Request.getAccount)
                            break
                        default :
                            break
                    }
                    this.metamaskManager.event = null
                })
            }

            if (this.metamaskManager.error != null) {
                console.error(this.TAG, 'this.metamaskManager.error ' + this.metamaskManager.error.type)
                switch (this.metamaskManager.error.type) {
                    case Metamask.Error.autoConnect :
                        let page = new PageObjcet(PageId.Login, {title: "Login"})
                        AppPagePresenter().openPopup(page)
                        break
                    case Metamask.Error.checkAccountStatus:
                        alert("User account status has changed and the page is refreshed")
                        window.location.reload()
                        break
                    default :
                        break
                }
            }

            if (this.metamaskManager.accounts != null) {
                let prevUser = this.dataProvider.user
                let address =  this.metamaskManager.accounts[0]
                if (prevUser != null) {
                    console.log(this.TAG + " prevUser", prevUser.adress)
                    console.log(this.TAG + " currentUser", address)
                    if (prevUser.adress === address){ return }
                }
                console.log(this.TAG + " getAccount Api")
                runInAction(() => {
                    this.dataProvider.requestQ(new DataRequest(Rest.ApiType.getAccount, {address: address}))
                })
            }

            let response = this.dataProvider.response
            if (response != null){
                switch (response.type){
                    case  Rest.ApiType.getAccount :
                        console.log(this.TAG + " getAccount")
                        let prevUser = this.dataProvider.user
                        let user = new User().setData(response.data)
                        if (prevUser != null) {
                            console.log(this.TAG + " prevUser", prevUser.adress)
                            console.log(this.TAG + " currentUser", user.adress)
                            if (prevUser.adress === user.adress){
                                let currentPage =  AppPagePresenter().pageObj
                                if ( currentPage.pageId !== PageId.Intro ) {
                                    console.log(this.TAG + " sameUser", prevUser.adress)
                                    return
                                }
                            }
                        }
                        this.dataProvider.user = user
                        AppPagePresenter().closeAllPopup()
                        console.log(this.TAG + " dataProvider.user changed")
                        if (user.isJoin()) {
                            let page = new PageObjcet(PageId.Home, {title: "InitHome"})
                            AppPagePresenter().changePage(page)
                            if(user.needProfile()){
                                let pop = new PageObjcet(PageId.Regist, {title: "regist profile"})
                                AppPagePresenter().openPopup(pop)
                            }
                        } else {
                            if (this.joinRetryCount > 2) {
                                alert("auto connect server error")
                                return
                            }
                            this.joinRetryCount += 1
                            let address =  this.metamaskManager.accounts[0]
                            this.dataProvider.requestQ(new DataRequest(Rest.ApiType.postAccount, {address:address}))
                        }

                        break
                    case  Rest.ApiType.postAccount :
                        let address =  this.metamaskManager.accounts[0]
                        this.dataProvider.requestQ(new DataRequest(Rest.ApiType.getAccount, {address:address}))
                        break
                }

            }
        })
    }

}

const appController = new AppController()
export default function GlobalAppController() {
    return appController
}


