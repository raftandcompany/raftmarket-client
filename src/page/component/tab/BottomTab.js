import React from "react"
import AppPagePresenter, {PageId, PageObjcet} from "page/PagePresenter"
import { Tab }  from "style/layoutStyle"
import NaviButton from "skeleton/component/button/NaviButton"


const TAG = "BottomTab"
export default function BottomTab({currentPageId}){
    return (
        <Tab>
            <NaviButton
                title = "home"
                isSelectd = {currentPageId === PageId.Home}
                action = {()=>{action( new PageObjcet(PageId.Home, {title: "home"}))}}
            />
            <NaviButton
                title = "test"
                isSelectd = {currentPageId === PageId.Test}
                action = {()=>{action( new PageObjcet(PageId.Test, {title: "test"}))}}
            />

            <NaviButton
                title = "testPopup"
                isSelectd = {false}
                action = {()=>{ action( new PageObjcet(PageId.Test, {title: "test popup"}, true) )}}
            />

            <NaviButton
                title = "Sample"
                isSelectd = {false}
                action = {()=>{ action( new PageObjcet(PageId.Sample, {title: "Sample"}, true) )}}
            />
        </Tab>
    )
}

function action(pageObj){
    console.log(TAG, pageObj)
    if(pageObj.isPopup){
        AppPagePresenter().openPopup(pageObj)
    }else{
        AppPagePresenter().changePage( pageObj )
    }

}
