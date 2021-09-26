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
import {AssetData, ItemAssetArt} from "page/component/item/ItemAsset"
import PageTab from "page/component/tab/PageTab";
import ListTitle from "skeleton/component/title/ListTitle";



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

    const ListingItemList = ({ datas, assetData }) =>
        <div>
            <ListTitle title={<span>Listing</span>} icon="Listing" more="Add Listing" type="blue"
                       action={()=> {
                           let pageObj = new PageObjcet(PageId.CreateListing, {data: assetData})
                           AppPagePresenter().openPopup(pageObj)
                       }} />
            <div className="list">
                { datas.map( data =>
                    <ItemListing key={ uuidv4().toString() }
                        data={data}
                        action = {()=> {

                        }}
                    />)
                }
            </div>
        </div>

    const OfferItemList = ({ datas , assetData}) =>
        <div>
            <ListTitle title={<span>Offer</span>} icon="Offer" more="Add Offer" type="red"
                       action={()=> {
                           let pageObj = new PageObjcet(PageId.CreateOffer, {data: assetData})
                           AppPagePresenter().openPopup(pageObj)
                       }}/>
            <div className="list">
                { datas.map( data =>
                    <ItemOffer key={ uuidv4().toString() }
                        data={data}
                        action = {()=> {

                        }}
                    />)
                }
            </div>
        </div>

    return (
        <PageBg
            isPopup={pageObj.isPopup}
            ani={pageObj.isPopup ? slideInUp : fadeIn}>
            <div style={{position:"relative"}}>
                <PageTab pageObj={pageObj}/>
                { <Header  key={ uuidv4().toString() } data={ asset }/> }
                { <ListingItemList  key={ uuidv4().toString() } datas={ listings} assetData = {asset}/> }
                { <OfferItemList  key={ uuidv4().toString() } datas={ offers } assetData = {asset}/> }
            </div>
        </PageBg>
    )
}

