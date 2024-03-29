import React ,  {useState}from "react"
import {autorun, observable, runInAction} from "mobx"
import {v4 as uuidv4} from "uuid"
import {PageBg} from "style/layoutStyle"
import {fadeIn, slideInUp} from "style/ani"
import * as Rest from "store/rest/Rest"
import AppDataProvider , {DataRequest}from "store/provider/DataProvider"
import AppMetamaskManager from "store/manager/metamask/MetamaskManager"
import AppPagePresenter, {PageId, PageObjcet} from "page/PagePresenter"
import {OrderData, ItemListing, ItemOffer} from "page/component/item/ItemOrder"
import {AssetData, ItemAssetArt} from "page/component/item/ItemAsset"
import PageTab from "page/component/tab/PageTab";
import {Accordion} from "skeleton/component/unit/Unit";
import * as Exchange from "store/manager/exchange/exchange";
import * as Metamask from "store/manager/metamask/Metamask";
import ListTitle from "../../../skeleton/component/title/ListTitle";


export default function PageAsset({pageObj}){
    const TAG = "PageAsset"
    const [asset, setAsset] = useState(null)
    const [listings, setListings] = useState([])
    const [offers, setOffers] = useState([])
    const [isMine, setIsMine] = useState([])
    let dataProvider = AppDataProvider()
    let disposer = null
    let exchange = Exchange.default
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
        let params = currentAssetParams()
        console.log(TAG, params)

        dataProvider.requestQ(new DataRequest(Rest.ApiType.getAssetById, data, TAG,true))
        dataProvider.requestQ(new DataRequest(Rest.ApiType.getListings, params, TAG,true))
        dataProvider.requestQ(new DataRequest(Rest.ApiType.getOffers, params, TAG,true))
    }

    const currentAssetParams = () => {
        let data = pageObj.params["data"].data
        return {
            collectionAddress: data.collectionAddress,
            assetId: data.assetId,
            address: AppMetamaskManager().accounts[0]
        }
    }

    function onSubscribe(){
        disposer = autorun(() => {
            let response = dataProvider.response
            if (response != null){
                switch (response.type) {
                    case  Rest.ApiType.putAsset :
                        let data = pageObj.params["data"].data
                        dataProvider.requestQ(new DataRequest(Rest.ApiType.getAssetById, data, TAG,true))
                        break
                    case  Rest.ApiType.postOffer :
                        dataProvider.requestQ(new DataRequest(Rest.ApiType.getOffers, currentAssetParams(), TAG,true))
                        break
                    case  Rest.ApiType.postListing :
                        dataProvider.requestQ(new DataRequest(Rest.ApiType.getListings, currentAssetParams(), TAG,true))
                        break
                }
                if (response.id !== TAG){return}
                switch (response.type) {
                    case  Rest.ApiType.getAssetById :
                        console.log(TAG + " getAssetById", response.data)
                        setAsset( new AssetData(response.data))
                        let address = AppMetamaskManager().accounts[0]

                        runInAction(() => {
                            const found = response.data.owners.find(owner => {
                                    let isMe = owner.address === address
                                    console.log(TAG, owner.address)
                                    return  isMe
                                }
                            );
                            setIsMine (found != null )
                        })
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

    function buyOrder(order){
        console.log(TAG+"buyOrder", order)
        try {
            let hash = exchange.buy(order.data,{
                exchangeAddress:Metamask.ExchangeKey.defaultAddress,
                feeRecipient:Metamask.ExchangeKey.companyAddress,
                feeRatio:250,
                collectionAddress:order.data.collectionAddress,
                tokenId:order.data.assetId,
                protocol:Metamask.ExchangeKey.protocol,
                currencyAddress:Metamask.ExchangeKey.currencyAddress,
                price:order.data.basePrice,
                expirationTime:order.data.expirationTime,
            })
            console.log(TAG + " buyOrder success", hash)
            alert("purchase success")
            AppPagePresenter().closePopup(pageObj)
        } catch (error) {
            console.error(TAG + " buyOrder", error)
        }
    }

    function acceptOrder(order){
        console.log(TAG+"acceptOrder", order)
        try {
            let hash = exchange.acceptOffer(order.data,{
                exchangeAddress:Metamask.ExchangeKey.defaultAddress,
                feeRecipient:Metamask.ExchangeKey.companyAddress,
                feeRatio:250,
                collectionAddress:order.data.collectionAddress,
                tokenId:order.data.assetId,
                protocol:Metamask.ExchangeKey.protocol,
                currencyAddress:Metamask.ExchangeKey.currencyAddressOffer,
                price:order.data.basePrice,
                expirationTime:order.data.expirationTime,
            })
            console.log(TAG + " acceptOrder success", hash)
            alert("Approved")
            AppPagePresenter().closePopup(pageObj)

        } catch (error) {
            console.error(TAG + " acceptOrder", error)
        }
    }


    const Header = ({ data }) =>
        data == null
            ? <div></div>
            : <ItemAssetArt data={data} action={()=> {
                if(!isMine){return}
                let pageObj = new PageObjcet(PageId.EditAsset, {data: data})
                AppPagePresenter().openPopup(pageObj)
            }}/>


    const AccordionList = ({ assetData, listings, offers, isMine}) => {

        const accordionData = [
                {
                    type: 'row',
                    name: 'listing',
                    items: listings
                },
                {
                    type: 'row',
                    name: 'offers',
                    items: offers
                }
            ]

        return <div className="tab-content">
                <Accordion
                    data={accordionData}
                    isMine={isMine}
                    action={ data =>{
                        if(isMine){
                            acceptOrder(data)
                        } else {
                            buyOrder(data)
                        }
                    }}
                    create={ () =>{
                        if (isMine){
                            let pageObj = new PageObjcet(PageId.CreateListing, {data: assetData})
                            AppPagePresenter().openPopup(pageObj)
                        } else {
                            let pageObj = new PageObjcet(PageId.CreateOffer, {data: assetData})
                            AppPagePresenter().openPopup(pageObj)
                        }
                    }}
                />
        </div>
    }

    return (
        <PageBg
            className="popup"
            isPopup={pageObj.isPopup}
            ani={pageObj.isPopup ? slideInUp : fadeIn}>
            <div className="popup-inner">
                <PageTab pageObj={pageObj}/>

                <div className="popup-content">
                    <ListTitle title={<span>Sale NFT</span>}
                               more = "more"
                               type ="blue" action={ () =>{
                        if (asset.externalLink === "" || asset.externalLink == null ){
                            alert("Information not available")
                            return
                        }
                        window.open(asset.externalLink)
                    }}/>
                    { <Header  key={ uuidv4().toString() } data={ asset }/> }
                    { <AccordionList  key={ uuidv4().toString() }
                                      assetData = {asset}
                                      listings={listings}
                                      offers={offers}
                                      isMine={isMine}
                    /> }
                </div>
            </div>
        </PageBg>
    )
}

