import React ,  {useState}from "react"
import {autorun,  observable} from "mobx"
import {v4 as uuidv4} from "uuid"
import {PageBg, Popup, StyledScrollWrap} from "style/layoutStyle"
import {fadeIn, slideInUp} from "style/ani"

import * as Rest from "store/rest/Rest"
import AppDataProvider , {DataRequest}from "store/provider/DataProvider"
import AppMetamaskManager from "store/manager/metamask/MetamaskManager"
import AppPagePresenter, {PageId, PageObjcet} from "page/PagePresenter"
import {OrderData, ItemListing, ItemOffer} from "page/component/item/ItemOrder"
import {Title} from "style/textStyle"
import {AssetData, ItemAssetArt} from "page/component/item/ItemAsset"
import PageTab from "../../component/tab/PageTab";



export default function PageAsset({pageObj}){
    const TAG = "PageAsset"
    const [asset, setAsset] = useState(null)
    const [listings, setListings] = useState([])
    const [offers, setOffers] = useState([])
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
        console.log(TAG, address)
        let data = pageObj.params["data"].data
        console.log(TAG, data)
        let params = {
            collectionAddress: data.collectionAddress,
            assetId: data.assetId,
            address: address
        }
        dataProvider.requestQ(new DataRequest(Rest.ApiType.getAssetById, data, TAG,true))
        dataProvider.requestQ(new DataRequest(Rest.ApiType.getListings, params, TAG,true))
        dataProvider.requestQ(new DataRequest(Rest.ApiType.getOffers, params, TAG,true))
    }

    function onSubscribe(){
        disposer = autorun(() => {
            let response = dataProvider.response
            if (response != null){
                if (response.id !== TAG){return}
                switch (response.type) {
                    case  Rest.ApiType.getAssetById :
                        console.log(TAG + " getAssetById", response.data)
                        setAsset( new AssetData(response.data))
                        break
                    case  Rest.ApiType.getListings :
                        console.log(TAG + " getListings", response.data)
                        setListings(response.data.map( d => {
                                return new OrderData(d)}
                            ))

                        break
                    case  Rest.ApiType.getOffers :
                        console.log(TAG + " getOffers", response.data)
                        setOffers(response.data.map( d => {
                            return new OrderData(d)}
                        ))
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
    const Header = ({ data }) =>
        data == null
            ? <div></div>
            : <ItemAssetArt data={data}/>

    const ListingItemList = ({ datas }) =>
        <div>
            <Title>Listing</Title>
            <div className="list">
                { datas.map( data =>
                    <ItemListing
                        data={data}
                        action = {()=> {

                        }}
                    />)
                }
            </div>
        </div>

    const OfferItemList = ({ datas }) =>
        <div>
            <Title>Offer</Title>
            <div className="list">
                { datas.map( data =>
                    <ItemOffer
                        data={data}
                        action = {()=> {

                        }}
                    />)
                }
            </div>
        </div>

    return (
        <PageBg ani={pageObj.isPopup ? slideInUp : fadeIn}>
            <PageTab pageObj={pageObj}/>
            { <Header  key={ uuidv4().toString() } data={ asset }/> }
            { <ListingItemList  key={ uuidv4().toString() } datas={ listings }/> }
            { <OfferItemList  key={ uuidv4().toString() } datas={ offers }/> }
        </PageBg>
    )
}

