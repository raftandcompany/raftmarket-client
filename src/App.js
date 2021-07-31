import React from 'react'
import {observer} from "mobx-react";
import './App.css'
import AppController from  "./AppController"
import AppRepository from "store/Repository";
import AppPagePresenter from "page/PagePresenter"
import BottomTab from "page/component/tab/BottomTab";
import {Popup, Body} from "style/layoutStyle"


const TAG = "App"
const controller = AppController()
const repository = AppRepository()
const presenter = AppPagePresenter()

function App (){
    return(
        <Body className="App">
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
    <Popup>
        { presenter.popups.map(pop => presenter.getPage(pop)) }
    </Popup>
)

const PageNavi = observer(({ presenter }) =>
    <BottomTab currentPageId = {presenter.pageObj.pageId} />
)

export default App
