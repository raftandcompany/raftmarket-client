import React ,  {useState}from "react"
import {autorun,  observable} from "mobx"
import {v4 as uuidv4} from "uuid"
import {PageBg, Popup, StyledScrollWrap} from "style/layoutStyle"
import {fadeIn, slideInUp} from "style/ani"

import * as Rest from "store/rest/Rest"
import AppDataProvider , {DataRequest}from "store/provider/DataProvider"
import AppMetamaskManager from "store/manager/metamask/MetamaskManager"
import AppPagePresenter, {PageId, PageObjcet} from "page/PagePresenter"
import {ItemAssetArt, AssetData} from "page/component/item/ItemAsset"
import {Title} from "style/textStyle"
import {SearchType} from "store/rest/api/Asset"

export default function PageMyAsset({pageObj}){
    const TAG = "PageMyAsset"
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
        dataProvider.requestQ(new DataRequest(Rest.ApiType.getAssetSearch, {
            searchType: SearchType.Owner,
            address: address
        }, TAG))

    }

    function onSubscribe(){
        disposer = autorun(() => {
            let response = dataProvider.response

            if (response != null){
                switch (response.type) {
                    case  Rest.ApiType.putAsset :
                        let address = AppMetamaskManager().accounts[0]
                        dataProvider.requestQ(new DataRequest(Rest.ApiType.getAssetSearch, {
                            searchType: SearchType.Owner,
                            address: address
                        }, TAG))
                        break
                }

                if (response.id !== TAG){return}
                switch (response.type) {
                    case  Rest.ApiType.getAssetSearch :
                        setAssets(response.data.map( data => {
                            return new AssetData(data)
                        }))
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
    const AssetItemList = ({ datas }) =>
        <div>
            <Title>My Assets</Title>
            <div className="list">
                { datas.map( data =>
                    <ItemAssetArt
                        key={ uuidv4().toString() }
                        data={data}
                        action = {()=> {
                            let pageObj = new PageObjcet(PageId.Asset, {data: data})
                            AppPagePresenter().openPopup(pageObj)
                        }}
                        more = {()=> {
                            let pageObj = new PageObjcet(PageId.Asset, {data: data})

                        }}
                    />)
                }
            </div>
        </div>

    return (
        <PageBg ani={pageObj.isPopup ? slideInUp : fadeIn}>
            {/*<ItemArt data={new ArtData()}/>*/}
            { <AssetItemList datas={ assets }/> }
        </PageBg>
    )
}

