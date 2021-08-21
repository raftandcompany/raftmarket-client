import React ,  {useState}from "react"
import {autorun,  observable} from "mobx"
import {observer} from "mobx-react"
import {v4 as uuidv4} from "uuid"
import * as Scroll from 'react-scroll'

import {PageBg, Popup} from "style/layoutStyle"
import {fadeIn, slideInUp} from "style/ani"

import * as Rest from "store/rest/Rest"
import AppDataProvider , {DataRequest}from "store/provider/DataProvider"
import AppMetamaskManager from "store/manager/metamask/MetamaskManager"
import AppPagePresenter from "page/PagePresenter"
import PageTab from "page/component/tab/PageTab"
import InputSearch from "page/component/input/InputSearch"
import ViewPager from "page/component/viewpager/ViewPagerSample"
import ItemAsset, {AssetData} from "page/component/item/ItemAsset"
import {Title} from "style/textStyle"


export default function PageHome({pageObj}){
    const TAG = "PageHome"
    const [assets, setAssets] = useState([])
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
        dataProvider.requestQ(new DataRequest(Rest.ApiType.getAsset, "main"))

    }

    function onSubscribe(){
        disposer = autorun(() => {
            let response = dataProvider.response
            if (response != null){
                switch (response.type) {
                    case  Rest.ApiType.getAsset :
                        setAssets(response.data.map( set => {
                            var obj = new Object()
                            obj.name = set.name
                            obj.datas = set.assets.map(d => new AssetData(d))
                            return obj
                        }))
                        break
                }
            }

            let error = dataProvider.error
            if (error != null){
                switch (response.type) {
                    case  Rest.ApiType.getAsset :
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
        <div key={uuidv4()}>
            { datas.map(set => <CollectionItemList set={ set }/>) }
        </div>
    )
    const CollectionItemList = ({ set }) =>
        <div key={uuidv4()} >
            <Title>{ set.name }</Title>
            { set.datas.map(data => <Scroll.Element key={uuidv4()}><ItemAsset data={data}/></Scroll.Element>) }
        </div>


    return (
        <PageBg ani={pageObj.isPopup ? slideInUp : fadeIn}>
            <PageTab pageObj={pageObj}/>
            <InputSearch/>
            <ViewPager/>
            <CollectionList datas = {assets} />
        </PageBg>
    )


}

