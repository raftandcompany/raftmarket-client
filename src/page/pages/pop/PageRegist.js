import React from "react"
import {observable, autorun } from "mobx"
import {PageBg} from "style/layoutStyle"
import {fadeIn, slideInUp} from "style/ani"

import AppDataProvider, {DataRequest} from "store/provider/DataProvider"
import AppMetamaskManager from "store/manager/metamask/MetamaskManager"
import AppPagePresenter from "page/PagePresenter"

import * as Rest from "store/rest/Rest"
import InputProfile from "page/component/input/InputProfile"
import PageTab from "page/component/tab/PageTab";
import {Title} from "style/textStyle";

export default function PageRegist({pageObj}){
    const TAG = "PageRegist"
    let dataProvider = AppDataProvider()
    let disposer = null
    React.useEffect(() => {
        onAppear()
        onSubscribe()
        return () => onDisappear ()
    }, []);

    function onAppear (){
        observable(this,dataProvider)
        console.log(TAG, "onAppear")
    }

    function onSubscribe(){
        disposer = autorun(() => {
            let response = dataProvider.response
            if (response != null){
                switch (response.type) {
                    case  Rest.ApiType.putAccount :
                        alert("Welcome to join raftmarket")
                        AppPagePresenter().closePopup(pageObj)
                        break
                }
            }
        })
    }
    function onDisappear (){
        if (disposer != null) {
            disposer()
        }
    }

    function regist (data){
        console.log(TAG, data)
        let address =  AppMetamaskManager().accounts[0]
        dataProvider.requestQ(new DataRequest(
            Rest.ApiType.putAccount,
            {
                address:address,
                userName: data.nickName,
                bio: "",
                emailAddress:data.emailAddress
            }
        ))

    }

    return (
        <PageBg ani={pageObj.isPopup ? slideInUp : fadeIn}>
            <Title>Welcome, <br />Sign In</Title>
            <InputProfile emailAddress={""} nickName={""} action={data => {
                regist(data)
            }} />
        </PageBg>
    )
}

