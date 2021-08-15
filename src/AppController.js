import {autorun, makeAutoObservable, runInAction} from "mobx"
import React from "react";
import AppPagePresenter, {PageId, PageObjcet} from "page/PagePresenter"
import AppMetamaskManager from "store/manager/metamask/MetamaskManager"
import * as Metamask from "store/manager/metamask/Metamask"

class AppController {
    constructor() {
        this.createObservable()
        this.TAG = "AppController"
        this.accountIsInitate = false
        this.initApp()
        this.subscribe()
    }

    createObservable(){
        this.metamaskManager = AppMetamaskManager()
        makeAutoObservable(this)
    }

    initApp(){
        switch ( this.metamaskManager.status){
            case Metamask.Status.uninstall :
                let page = new PageObjcet(PageId.Login, {title: "Login"})
                AppPagePresenter().openPopup(page)
                break
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
                runInAction(() => {
                    switch (this.metamaskManager.error.type) {
                        case Metamask.Error.autoConnect :
                            let page = new PageObjcet(PageId.Login, {title: "Login"})
                            AppPagePresenter().openPopup(page)
                            break
                        default :
                            break
                    }
                    this.metamaskManager.error = null
                })
            }

            if (this.metamaskManager.accounts != null && !this.accountIsInitate) {
                runInAction(() => {
                    let page = new PageObjcet(PageId.Home, {title: "InitHome"})
                    AppPagePresenter().changePage(page)
                    this.accountIsInitate = true
                })
            }
        })
    }

}

const appController = new AppController()
export default function GlobalAppController() {
    return appController
}


