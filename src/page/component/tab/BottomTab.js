import React from "react"
import AppPagePresenter, {PageId, PageObjcet} from "page/PagePresenter"
import { Tab }  from "style/layoutStyle"
import NaviButton from "skeleton/component/button/NaviButton"


const TAG = "BottomTab"
export default function BottomTab({currentPageId}){
    return (
        <Tab>
            <NaviButton
                title = "Home"
                isSelectd = {currentPageId === PageId.Home}
                action = {()=>{action( new PageObjcet(PageId.Home, {title: "Home"}))}}
            />
            <NaviButton
                title = "My"
                isSelectd = {currentPageId === PageId.MyAsset}
                action = {()=>{action( new PageObjcet(PageId.MyAsset, {title: "My"}))}}
            />
            <NaviButton
                title = "Collection"
                isSelectd = {currentPageId === PageId.Collection}
                action = {()=>{action( new PageObjcet(PageId.Collection, {title: "Collection"}))}}
            />
            <NaviButton
                title = "History"
                isSelectd = {currentPageId === PageId.Sample}
                action = {()=>{ action( new PageObjcet(PageId.Sample, {title: "Sample"}))}}
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
