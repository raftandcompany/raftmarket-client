import { makeAutoObservable, autorun , runInAction} from "mobx"
import AppDataProvider from "store/provider/DataProvider"
import AppRestApi from "store/rest/RestApi"

class Repository {
    constructor() {
        this.createObservable()
        this.TAG = "Repository"

        this.restApi = AppRestApi()
        this.subscribe()
    }
    createObservable(){
        this.dataProvider = AppDataProvider()
        makeAutoObservable(this)
    }

    subscribe(){
        this.disposer = autorun(() => {
            let request = this.dataProvider.request
            if (request != null){
                console.log(this.TAG + "request", request.type)
                this.restApi.load(request)
                runInAction(() => {this.dataProvider.request = null})
            }

            let response = this.dataProvider.response
            if (response != null){
                console.log(this.TAG + "response", response.type)
                runInAction(() => {this.dataProvider.response = null})
            }

            let error = this.dataProvider.error
            if (error != null){
                console.log(this.TAG + "error", error.type)
                runInAction(() => {this.dataProvider.error = null})
            }
        })
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
