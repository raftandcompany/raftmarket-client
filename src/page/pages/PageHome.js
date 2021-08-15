import React from "react"
import {PageBg} from "style/layoutStyle"
import {fadeIn, slideInUp} from "style/ani"
import PageTab from "page/component/tab/PageTab"
import ViewPagerSample from "page/component/viewpager/ViewPagerSample"
import * as DataProvider from "../../store/provider/DataProvider"
import * as Rest from "../../store/rest/Rest"
import AppDataProvider from "../../store/provider/DataProvider"
import AppMetamaskManager from "store/manager/metamask/MetamaskManager"

const TAG = "PageHome"
export default function PageHome({pageObj}){
    React.useEffect(() => {
        onAppear()
    }, []);
    return (
        <PageBg ani={pageObj.isPopup ? slideInUp : fadeIn}>
            <PageTab pageObj={pageObj}/>
            <ViewPagerSample pageObj={pageObj}/>
        </PageBg>
    )
}

function onAppear (){
    let dataProvider = AppDataProvider()
    let address = AppMetamaskManager().accounts[0]
    console.log(TAG,"address : " + address)
    dataProvider.requestQ(new DataProvider.DataRequest(Rest.ApiType.getCollection, {address:address}))
}