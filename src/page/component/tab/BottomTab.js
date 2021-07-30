import React from "react"
import AppPagePresenter, {PageId, PageObjcet} from "page/PagePresenter"
import { Tab }  from "style/LayoutStyle"
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
        </Tab>
    )
}

function action(pageObj){
    AppPagePresenter().changePage( pageObj )
}
