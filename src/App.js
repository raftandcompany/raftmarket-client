import React from 'react'
import {observer} from "mobx-react";
import './App.css'
import AppRepository from "store/Repository";
import AppPagePresenter from "page/PagePresenter"
import BottomTab from "page/component/tab/BottomTab";

const TAG = "BottomTab"
const repository = AppRepository()
const presenter = AppPagePresenter()


function App (){
    return(
        <div className="App">
            <PageDisplayer presenter = {presenter} />
            <PageNavi presenter = {presenter}/>
        </div>
    )
}

const PageDisplayer = observer(({ presenter }) =>
    presenter.getPage(presenter.pageObj)
)

const PageNavi = observer(({ presenter }) =>
    <BottomTab currentPageId = {presenter.pageObj.pageId} />
)

export default App
