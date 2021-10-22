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

// import PageCollection from "page/pages/main/PageCollection"
// import PageSample from "page/pages/PageSample"

const TAG = "App"
const repository = AppRepository()
const presenter = AppPagePresenter()
const controller = AppController()

function App (){
    return <AppBody/>
}

function AppBody (){

    React.useEffect(() => {
        onAppear()
        onSubscribe()
        return () => onDisappear ()
    }, []);

    function onAppear (){
    }
    function onSubscribe(){
    }
    function onDisappear (){
    }
    return(
        <Body className="App">
            <GlobalStyle />

            <PageDisplayer presenter = {presenter} />
            <PageNavi presenter = {presenter}/>
            <PopupDisplayer presenter = {presenter}/>

        </Body>
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
