import React from "react"
import {PageBg} from "style/layoutStyle"
import {fadeIn, slideInUp} from "style/ani"
import * as DataProvider from "../../store/provider/DataProvider"
import * as Rest from "../../store/rest/Rest"
import AppDataProvider from "../../store/provider/DataProvider"
import {autorun, runInAction} from "mobx";
import InputProfile from "page/component/input/InputProfile"

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
        console.log(TAG, "onAppear")
    }
    function onSubscribe(){
        disposer = autorun(() => {
            let response = dataProvider.response
            if (response != null){
                console.log(TAG + "response", response.type)
                runInAction(() => {

                })
            }
            let error = dataProvider.error
            if (error != null){
                console.log(TAG + "error", error.type)
                runInAction(() => {

                })
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
    }

    return (
        <PageBg ani={pageObj.isPopup ? slideInUp : fadeIn}>
            <InputProfile emailAddress={""} nickName={""} action={data => {
                regist(data)
            }} />
        </PageBg>
    )
}

