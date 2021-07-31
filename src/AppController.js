import {autorun, makeAutoObservable, runInAction} from "mobx"
import React from "react";
import AppPagePresenter, {PageId, PageObjcet} from "page/PagePresenter"
import AppMetamaskManager from "store/manager/metamask/MetamaskManager"
import * as Metamask from "store/manager/metamask/Metamask"
class AppController {
    constructor() {
        this.createObservable()
        this.TAG = "AppController"
        this.initApp()
        this.subscribe()
    }

    createObservable(){
        this.metamaskManager = AppMetamaskManager()
        makeAutoObservable(this)
    }

    initApp(){
        if ( this.metamaskManager.status !== Metamask.Status.connect){
            let page = new PageObjcet(PageId.Login, {title: "Login"})
            AppPagePresenter().openPopup(page)
        }
    }

    subscribe(){
        this.disposer = autorun(() => {
            if (this.metamaskManager.event != null) {
                switch (this.metamaskManager.event) {
                    case Metamask.Event.installed :
                        alert("please reload page")
                        break
                    case Metamask.Event.connected :
                        alert("Metamask connected")
                        AppPagePresenter().closePopupByPageId(PageId.Login)
                        break
                    default :
                        break
                }
                this.metamaskManager.event = null
            }
        })
    }

}

const appController = new AppController()
export default function GlobalAppController() {
    return appController
}


