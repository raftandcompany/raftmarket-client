import React from 'react'
import {observer} from "mobx-react"
import './App.css'
import AppController from  "./AppController"
import AppRepository from "store/Repository"
import AppPagePresenter from "page/PagePresenter"
import BottomTab from "page/component/tab/BottomTab"
import {Popup, Body} from "style/layoutStyle"
import {GlobalStyle} from "style/common/globalStyle"
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

import PageSample from "page/pages/PageSample"
import PageTab from "page/component/tab/PageTab"

const TAG = "App"

const repository = AppRepository()
const presenter = AppPagePresenter()
const controller = AppController()

const pageObj = {
    id :'12',
    pageId :1,
    params:{'title':'tt'},
    isPopup: true
}


function App (){
    const getLibrary = (provider) => {
        console.log("[getLibrary] provider", provider);
        return new Web3Provider(provider);
    };

    return(
        <Web3ReactProvider getLibrary={getLibrary}>
            <Body className="App">
                <GlobalStyle />
                {/* <PageSample />
                <PageTab pageObj={pageObj}/> */}
                <PageDisplayer presenter = {presenter} />
                <PageNavi presenter = {presenter}/>
                <PopupDisplayer presenter = {presenter}/>
            </Body>
        </Web3ReactProvider>
    )
}

const PageDisplayer = observer(({ presenter }) =>
    presenter.getPage(presenter.pageObj)
)

const PopupDisplayer = observer(({ presenter }) =>
    <Popup hasPopup = {presenter.popups.length !== 0}>
        { presenter.popups.map(pop => presenter.getPage(pop)) }
    </Popup>
)

const PageNavi = observer(({ presenter }) =>
    <BottomTab currentPageId = {presenter.pageObj.pageId} />
)


export default App
