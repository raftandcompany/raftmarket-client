import React from 'react'
import {observer} from "mobx-react"
import './App.css'
import AppController from  "./AppController"
import AppRepository from "store/Repository"
import AppPagePresenter from "page/PagePresenter"
import BottomTab from "page/component/tab/BottomTab"
import {Popup, Body} from "style/layoutStyle"
import {GlobalStyle} from "style/common/globalStyle"
import { Web3ReactProvider } from '@web3-react/core'
import { useWeb3React } from "@web3-react/core"
import  Web3 from "web3-react"

const TAG = "App"
const repository = AppRepository()
const presenter = AppPagePresenter()
const controller = AppController()

function App (){
    const getLibrary = (provider) => {
        let web3 =  new Web3(provider)
        console.log("App Web3", web3)
        window.web3 = web3
        return web3
    }

    return(
        <Web3ReactProvider getLibrary={getLibrary}>
            <AppBody/>
        </Web3ReactProvider>
    )
}

function AppBody (){
    const { connector, activate, deactivate, active } = useWeb3React()
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