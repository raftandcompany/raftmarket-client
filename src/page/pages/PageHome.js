import React ,  {useState}from "react"
import {autorun,  observable} from "mobx"
import {observer} from "mobx-react"
import {PageBg, Popup} from "style/layoutStyle"
import {fadeIn, slideInUp} from "style/ani"

import * as Rest from "store/rest/Rest"
import AppDataProvider , {DataRequest}from "store/provider/DataProvider"
import AppMetamaskManager from "store/manager/metamask/MetamaskManager"
import AppPagePresenter from "page/PagePresenter"
import PageTab from "page/component/tab/PageTab"
import InputSearch from "page/component/input/InputSearch"
import * as Scroll from 'react-scroll'

export default function PageHome({pageObj}){
    const TAG = "PageHome"
    const [collections, setCollections] = useState([
        {name :"Collection1"},{name :"Collection2"},{name :"Collection3"},{name :"Collection4"}
    ])
    let dataProvider = AppDataProvider()
    let disposer = null
    React.useEffect(() => {
        onAppear()
        onSubscribe()
        return () => onDisappear ()
    }, []);

    function onAppear (){
        console.log(TAG, "onAppear")
        observable(this,dataProvider)
        let address = AppMetamaskManager().accounts[0]
        dataProvider.requestQ(new DataRequest(Rest.ApiType.getCollection, {address:address}))
    }

    function onSubscribe(){
        disposer = autorun(() => {
            let response = dataProvider.response
            if (response != null){
                switch (response.type) {
                    case  Rest.ApiType.getCollection :
                        console.log(TAG, "recieved getCollection")
                        //setCollections(response.data)
                        break
                }
            }

            let error = dataProvider.error
            if (error != null){
                switch (response.type) {
                    case  Rest.ApiType.getCollection :
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
    const CollectionList = observer(({ datas }) =>
        <div>
            { datas.map(data =>
                <Scroll.Element>{data.name}</Scroll.Element>
            )}
        </div>
    )
    return (
        <PageBg ani={pageObj.isPopup ? slideInUp : fadeIn}>
            <PageTab pageObj={pageObj}/>
            <InputSearch/>
            { <CollectionList datas = {collections} /> }
        </PageBg>
    )


}

