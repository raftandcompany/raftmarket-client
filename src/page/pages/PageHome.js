import React from "react"
import {PageBg} from "style/layoutStyle"
import {fadeIn, slideInUp} from "style/ani"
import PageTab from "page/component/tab/PageTab"
import * as DataProvider from "../../store/provider/DataProvider"
import * as Rest from "../../store/rest/Rest"
import AppDataProvider from "../../store/provider/DataProvider"
import AppMetamaskManager from "store/manager/metamask/MetamaskManager"
import {autorun, runInAction} from "mobx";

export default function PageHome({pageObj}){
    const TAG = "PageHome"
    let dataProvider = AppDataProvider()
    let disposer = null
    React.useEffect(() => {
        onAppear()
        onSubscribe()
        return () => onDisappear ()
    }, []);

    function onAppear (){
        console.log(TAG, "onAppear")
        let address = AppMetamaskManager().accounts[0]
        dataProvider.requestQ(new DataProvider.DataRequest(Rest.ApiType.getCollection, {address:address}))
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

    return (
        <PageBg ani={pageObj.isPopup ? slideInUp : fadeIn}>
            <PageTab pageObj={pageObj}/>
        </PageBg>
    )
}

