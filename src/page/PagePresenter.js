import {makeAutoObservable, runInAction} from "mobx"
import React from "react";
import { v4 as uuidv4 } from 'uuid';
import * as Page from 'page/Pages';

class PagePresenter {
    constructor() {
        this.createObservable()
        this.TAG = "PagePresenter"
        this.historys = []
        window.onhashchange = () => {
            if (window.location.hash === "") {return}
            let params =  window.location.hash.replace("#", "").split("|")
            if (params.length !== 2){return}
            console.log(this.TAG, "onhashchange  " + window.location.hash)
        }
    }
    updateHistory(pageObj) {
        window.location.hash = pageObj.pageId + "|" + pageObj.id
        this.historys.push(this.pageObj)
    }

    createObservable(){
        this.pageObj = new PageObjcet(PageId.Intro, {title: "APP Intro"})
        this.popups = []
        this.event = null
        makeAutoObservable(this)
    }

    changePage(pageObj){
        this.updateHistory(pageObj)
        console.log(this.TAG, "changePage " + pageObj.pageId)
        runInAction( () => {
            pageObj.isPopup = false
            this.event = new PageEvent(PageEventType.ChangePage, pageObj)
            this.pageObj = pageObj
        })
    }

    openPopup(pageObj){
        console.log(this.TAG, "openPopup " + pageObj.pageId)
        document.body.style.cssText = `
            position: fixed; 
            top: -${window.scrollY}px;
            overflow-y: scroll;
            width: 100%;`;
        runInAction( () => {
            pageObj.isPopup = true
            this.event = new PageEvent(PageEventType.OpenPopup, pageObj)
            this.popups.push(pageObj)
        })

    }

    closePopup(pageObj){
        document.body.style.cssText = '';
        runInAction( () => {
            let found = this.popups.findIndex(element => element.id === pageObj.id )
            if(found != null){
                this.event = new PageEvent(PageEventType.ClosePopup, pageObj)
                this.popups.splice(found, 1)
                console.log(this.TAG, "closePopup " + this.popups)
            }
        })
    }

    closeAllPopup(){
        runInAction( () => {
            this.popups = []
        })
    }

    closePopupByPageId(pageId){
        runInAction( () => {
            let found = this.popups.findIndex(element => element.pageId === pageId )
            if(found != null){
                this.popups.splice(found, 1)
                console.log(this.TAG, "closePopup " + this.popups)
            }
        })
    }

    getPage(pageObj){
        if (pageObj == null) { return null }
        return this.getPageDom(pageObj)
    }

    getPageDom(pageObj){
        switch (pageObj.pageId) {
            case PageId.Intro :
                return <Page.Intro key={pageObj.id} pageObj={pageObj}></Page.Intro>
            case PageId.Home :
                return <Page.Home key={pageObj.id} pageObj={pageObj}></Page.Home>
            case PageId.MyAsset :
                return <Page.MyAsset key={pageObj.id} pageObj={pageObj}></Page.MyAsset>
            case PageId.Collection :
                return <Page.Collection key={pageObj.id} pageObj={pageObj}></Page.Collection>
            case PageId.Asset :
                return <Page.Asset key={pageObj.id} pageObj={pageObj}></Page.Asset>
            case PageId.EditAsset :
                return <Page.EditAsset key={pageObj.id} pageObj={pageObj}></Page.EditAsset>
            case PageId.CreateListing :
                return <Page.CreateListing key={pageObj.id} pageObj={pageObj}></Page.CreateListing>
            case PageId.CreateOffer :
                return <Page.CreateOffer key={pageObj.id} pageObj={pageObj}></Page.CreateOffer>


            case PageId.Login :
                return <Page.Login key={pageObj.id} pageObj={pageObj}></Page.Login>
            case PageId.Regist :
                return <Page.Regist key={pageObj.id} pageObj={pageObj}></Page.Regist>


            case PageId.Test :
                return <Page.Test key={pageObj.id} pageObj={pageObj}></Page.Test>
            case PageId.Sample :
                return <Page.Sample key={pageObj.id} pageObj={pageObj}></Page.Sample>
            default : return null
        }
    }
}

export class PageObjcet {
    constructor(pageId, params, isPopup = false) {
        this.id = uuidv4()
        this.pageId = pageId
        this.params = params
        this.isPopup = isPopup
    }
}

export const PageId = Object.freeze ({
    Test : 1,
    Intro : 0,
    Home : 100,
    MyAsset: 200,
    Collection: 300,
    Asset : 1001,
    EditAsset : 1004,
    CreateListing: 1002,
    CreateOffer: 1003,
    Login : 9000,
    Regist : 9001,
    Sample : 501,
})


export class PageEvent {
    constructor( type, data) {
        this.type = type
        this.data = data
    }
}

export const PageEventType = Object.freeze ({
    ChangePage : "ChangePage",
    OpenPopup : "OpenPopup",
    ClosePopup : "ClosePopup"
})

const pagePresenter = new PagePresenter()
export default function AppPagePresenter() {
    return pagePresenter
}
