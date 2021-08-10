import { makeAutoObservable } from "mobx"
import React from "react";
import { v4 as uuidv4 } from 'uuid';
import * as Page from 'page/Pages';

class PagePresenter {
    constructor() {
        this.createObservable()
        this.TAG = "PagePresenter"
    }

    createObservable(){
        this.pageObj = new PageObjcet(PageId.Home, {title: "APP Init"})
        this.popups = []
        makeAutoObservable(this)
    }

    changePage(pageObj){
        console.log(this.TAG, "changePage " + pageObj.pageId)
        pageObj.isPopup = false
        this.pageObj = pageObj
    }

    openPopup(pageObj){
        console.log(this.TAG, "openPopup " + pageObj.pageId)
        pageObj.isPopup = true
        this.popups.push(pageObj)
    }

    closePopup(pageObj){
        let found = this.popups.findIndex(element => element.id === pageObj.id )
        if(found != null){
            this.popups.splice(found, 1)
            console.log(this.TAG, "closePopup " + this.popups)
        }
    }

    closePopupByPageId(pageId){
        let found = this.popups.findIndex(element => element.pageId === pageId )
        if(found != null){
            this.popups.splice(found, 1)
            console.log(this.TAG, "closePopup " + this.popups)
        }
    }

    getPage(pageObj){
        if (pageObj == null) { return null }
        return this.getPageDom(pageObj)
    }

    getPageDom(pageObj){
        switch (pageObj.pageId) {
            case PageId.Home :
                return <Page.Home key={pageObj.id} pageObj={pageObj}></Page.Home>
            case PageId.Login :
                return <Page.Login key={pageObj.id} pageObj={pageObj}></Page.Login>
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
    Home : 100,
    Login : 9999,
    Sample : 11,
})

const pagePresenter = new PagePresenter()
export default function AppPagePresenter() {
    return pagePresenter
}
