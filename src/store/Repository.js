import { makeAutoObservable, autorun , runInAction, action} from "mobx"
import AppDataProvider from "store/provider/DataProvider"
import AppRestApi from "store/rest/RestApi"
import AppMetamaskManager from "store/manager/metamask/MetamaskManager"
import AppPagePresenter, {PageId,  PageEventType} from "page/PagePresenter"
import * as Metamask from "./manager/metamask/Metamask";

class Repository {
    constructor() {
        this.createObservable()
        this.TAG = "Repository"
        this.restApi = AppRestApi()
        this.subscribe()
    }
    createObservable(){
        this.dataProvider = AppDataProvider()
        this.presenter = AppPagePresenter()
        this.metamaskManager = AppMetamaskManager()
        makeAutoObservable(this)
    }

    subscribe(){

        let presenterSubscribe = autorun(() => {
            let presenterEvent = this.presenter.event
            if (presenterEvent != null){
                switch (presenterEvent.type) {
                    case  PageEventType.ChangePage :
                        this.restApi.cancel()
                        this.metamaskManager.requestQ(Metamask.Request.checkAccountStatus)
                        break
                    default :
                        break
                }
                action(() => {
                    this.presenter.event = null
                })
            }
        })

        let dataProvideSubscribe = autorun(() => {
            let request = this.dataProvider.request
            if (request != null){
                console.log(this.TAG + " request", request.type)
                this.restApi.load(request)
                runInAction(() => {
                    this.dataProvider.response = null
                    this.dataProvider.error = null
                    this.dataProvider.request = null

                })
            }
            let response = this.dataProvider.response
            if (response != null){
                console.log(this.TAG + " response", response.type)
            }
            let error = this.dataProvider.error
            if (this.dataProvider.error != null){
                console.log(this.TAG + " error", error.type)
                if (error.isOption == false) {
                    alert(error.err.message)
                }
            }
        })

        let metamaskSubscribe = autorun(() => {
            if (this.metamaskManager.event != null) {
                console.log(this.TAG + " metamaskManager event")
            }
            if (this.metamaskManager.error != null) {
                console.log(this.TAG + " metamaskManager error")
            }
        })

        this.disposers = [presenterSubscribe , dataProvideSubscribe, metamaskSubscribe]
    }

    destory(){
        this.disposer()
        this.dataProvider = null
        this.restApi = null
    }
}

const repository = new Repository()
export default function AppRepository() {
    return repository
}
