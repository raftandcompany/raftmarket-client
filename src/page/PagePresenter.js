import { makeAutoObservable } from "mobx"
import React from "react";
import * as Page from 'page/Pages';

class PagePresenter {
    constructor() {
        this.createObservable()
        this.TAG = "PagePresenter"
    }

    createObservable(){
        this.pageObj = new PageObjcet(PageId.Home, {title: "APP Init"})
        makeAutoObservable(this)
    }

    changePage(pageObj){
        console.log(this.TAG, pageObj.pageId)
        this.pageObj = pageObj
    }

    getPage(pageObj){
        if (pageObj == null) { return null }
        return this.getPageDom(pageObj)
    }

    getPageDom(pageObj){
        switch (pageObj.pageId) {
            case PageId.Home :
                console.log(this.TAG, pageObj)
                return <Page.Home pageObj={pageObj}></Page.Home>
            case PageId.Test :
                console.log(this.TAG, pageObj)
                return <Page.Test pageObj={pageObj}></Page.Test>
            default : return null
        }
    }
}

export class PageObjcet {
    constructor(pageId, params) {
        this.pageId = pageId
        this.params = params
    }
}

export const PageId = Object.freeze ({
    Test : 1,
    Home : 100
})

const pagePresenter = new PagePresenter()
export default function AppPagePresenter() {
    return pagePresenter
}


