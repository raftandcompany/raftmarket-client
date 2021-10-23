import React ,  {useState}from "react"
import {autorun, observable, runInAction} from "mobx"
import {v4 as uuidv4} from "uuid"
import {PageBg, Popup, StyledScrollWrap} from "style/layoutStyle"
import {fadeIn, slideInUp} from "style/ani"
import AppDataProvider , {DataRequest}from "store/provider/DataProvider"
import InputLabel from "skeleton/component/input/InputLabel";
import InputText from "skeleton/component/input/InputText";
import {StyledInputWrap} from "style/formStyle";
import {StyledFullButtonWrap} from "style/roundButton";
import BorderRadiusButton from "skeleton/component/button/BorderRadiusButton";
import PageTab from "page/component/tab/PageTab";
import * as Metamask from "store/manager/metamask/Metamask";
import * as Exchange from "store/manager/exchange/exchange";
import AppPagePresenter from "page/PagePresenter";
import * as Rest from "store/rest/Rest";
import {Loading} from "skeleton/component/unit/Loading";


export default function PageCreateOffer({pageObj}){
    const TAG = "PageCreateOffer"
    const [price, setPrice] = useState( "")
    const [expireDate, setExpireDate] = useState( "")
    const [focusName, setFocusName] = useState(null)
    const [assetData, setAssetData] = useState(null)
    const [infoLoading, setInfoLoading] = useState(null)
    let isHold = false
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
        console.log(TAG,pageObj)
        let asset = pageObj.params["data"].data
        console.log(TAG,asset)
        setAssetData(asset)
    }


    function onDisappear (){
        if (disposer != null) {
            disposer()
        }
        clearTokenProxyChecker()
        //clearApprovedChecker()
    }

    function submit(e){
        e.preventDefault()
        const priceValue =  parseInt(price);
        if (isNaN(priceValue)) {
            alert("wrong price")
            return
        }
        const expireValue =  parseInt(expireDate)
        if (isNaN(expireValue)) {
            alert("wrong expire date")
            return
        }

        checkTokenProxyAddress()
    }

    function onSubscribe(){
        disposer = autorun(() => {
            let response = dataProvider.response
            if (response != null){
                if (response.id !== TAG){return}
                switch (response.type) {
                    case  Rest.ApiType.postOffer :
                        console.log(TAG + " postOffer", response.data)
                        alert("regist offer completed")
                        AppPagePresenter().closePopup(pageObj)
                        break
                }
            }
        })
    }

    function registOrder(order){
        setInfoLoading(null)
        console.log(TAG + " registOrder", order)
        console.log(TAG + " registOrder", assetData)
        let params = {
            id: order.id,
            collectionAddress: assetData.collectionAddress,
            assetId: assetData.assetId,
            status: "OPENED",
            exchange: Metamask.ExchangeKey.defaultAddress,
            maker: order.maker,
            makerRelayerFee: order.makerRelayerFee,
            takerRelayerFee: order.takerRelayerFee,
            feeRecipient: order.feeRecipient,
            callData: order.callData,
            basePrice: order.basePrice,
            listingTime: order.listingTime,
            expirationTime: order.expirationTime,
            salt: order.salt,
            signature: order.signature
        }
        dataProvider.requestQ(new DataRequest(Rest.ApiType.postOffer, params, TAG,false))
    }

    function registOffer(proxyAddress){

        console.log(TAG + " registOffer", proxyAddress)
        const priceValue =  parseInt(price) * Metamask.ExchangeKey.coinUnit;
        const expireValue =  parseInt(expireDate)
        const expirationTime = Math.round((Date.now() + (expireValue * 1000 * 3600 * 24)) / 1000)
        console.log(TAG + " expirationTime", expirationTime)
        try {
            let sign = exchange.offering({
                exchangeAddress :Metamask.ExchangeKey.defaultAddress,
                feeRecipient: Metamask.ExchangeKey.companyAddress,
                feeRatio:250,
                collectionAddress:assetData.collectionAddress,
                tokenId:assetData.assetId,
                protocol:Metamask.ExchangeKey.protocol,
                currencyAddress:Metamask.ExchangeKey.currencyAddress,
                price:priceValue,
                expirationTime:expirationTime
            })

            sign.then(
                (order)=>{
                    console.log(TAG + " registOffer", order)
                    registOrder(order)
                },
                (error)=>{
                    console.error(TAG + " registOffer", error)
                })
        } catch (error) {
            console.error(TAG + " registOffer", error)
        }
    }

    let autoTokenProxyChecker = null
    function createTokenProxyChecker(){
        clearTokenProxyChecker()
        setInfoLoading("check token proxy address")
        autoTokenProxyChecker = setTimeout(() => {
            checkTokenProxyAddress()
        }, 3000)
    }
    function clearTokenProxyChecker(){
        setInfoLoading(null)
        if (autoTokenProxyChecker != null){
            clearInterval(autoTokenProxyChecker)
        }
    }
    
    function checkTokenProxyAddress(){
        console.log(TAG + " checkTokenProxyAddress", "init")
        try {
            let tokenProxyAddressResult = exchange.getTokenProxyAddress({
                exchangeAddress : Metamask.ExchangeKey.defaultAddress
            })
            tokenProxyAddressResult.then(
                (tokenProxyAddress)=>{
                    console.log(TAG + " checkTokenProxyAddress tokenProxyAddress", tokenProxyAddress)
                    let proxyAddressResult = exchange.allowance({
                        tokenAddress: Metamask.ExchangeKey.defaultTokenAddress,
                        tokenProxyAddress: tokenProxyAddress
                    })
                    proxyAddressResult.then(
                        ( proxyAddress)=>{
                            console.log(TAG + " checkTokenProxyAddress", isHold)
                            if (proxyAddress === Metamask.ExchangeKey.unregistTokenAdress) {
                                if(isHold){
                                    console.log(TAG + " checkTokenProxyAddress", "retry check")
                                    createTokenProxyChecker()
                                } else {
                                    console.log(TAG + " checkTokenProxyAddress", "registApprovedToken")
                                    registApprovedToken(tokenProxyAddress)
                                }
                            } else {
                                clearTokenProxyChecker()
                                registOffer(proxyAddress)
                            }
                        },
                        (error)=>{
                            isHold = false
                            clearTokenProxyChecker()
                            console.error(TAG + " checkTokenProxyAddress", error)
                        })


                },
                (error)=>{
                    isHold = false
                    clearTokenProxyChecker()
                    console.error(TAG + " checkTokenProxyAddress", error)
                })


        } catch (error) {
            isHold = false
            clearTokenProxyChecker()
            console.error(TAG + " checkTokenProxyAddress", error)
        }
    }

    function registApprovedToken(tokenProxyAddress){
        console.log(TAG + " registApprovedToken", tokenProxyAddress)
        try {
            let hash = exchange.approvalToken({
                tokenAddress : Metamask.ExchangeKey.defaultTokenAddress,
                tokenProxyAddress : tokenProxyAddress
            })
            hash.then(
                (token)=>{
                    console.log(TAG + " registApprovedToken", token)
                    if (token == null){
                        isHold = false
                        console.log(TAG + " registApprovedToken", "denied")
                        AppPagePresenter().closePopup(pageObj)
                    } else {
                        isHold = true
                        console.log(TAG + " registApprovedToken", "success")
                        createTokenProxyChecker()
                    }
                },
                (error)=>{
                    isHold = false
                    console.error(TAG + " registApprovedToken", error)
                })

        } catch (error) {
            isHold = false
            console.error(TAG + " registApprovedToken", error)
        }
    }

    const onChange = e => {
        const { value, name } = e.target
        setFocusName(name)
        if(name === "price"){
            setPrice(value)
        } else {
            setExpireDate(value)
        }

    }

    const InputField = ({name, placeHolder, value, isFocus, maxLength= "10" }) =>
        isFocus ?
            <InputText placeHolder={placeHolder}
                       name={name}
                       onChange={onChange}
                       value={value}
                       autoFocus
                       maxLength = {maxLength}

            />
            :
            <InputText placeHolder={placeHolder}
                       name={name}
                       onChange={onChange}
                       value={value}
                       maxLength = {maxLength}

            />

    return (
        <PageBg
            isPopup={pageObj.isPopup}
            ani={pageObj.isPopup ? slideInUp : fadeIn}>

            <PageTab pageObj={pageObj}/>
            <div className="popup-content">
                <StyledInputWrap key={ uuidv4().toString() }>
                    <InputLabel children="Price" />
                    <InputField
                        name="price"
                        placeHolder="Sale Price"
                        value={price}
                        isFocus={focusName === "price"}

                    />
                </StyledInputWrap>
                <StyledInputWrap key={ uuidv4().toString() }>
                    <InputLabel children="Expire Date" />
                    <InputField
                        name="expireDate"
                        placeHolder="Expire Date"
                        value={expireDate}
                        isFocus={focusName === "expireDate"}

                    />

                </StyledInputWrap>

                <StyledFullButtonWrap>
                    <BorderRadiusButton children="Create Offer" type="purple"
                            unactive={price === "" || expireDate  === ""}
                            fullSize={true}
                            onClick={e => submit(e)}
                    />
                </StyledFullButtonWrap>
            </div>
            <Loading info={infoLoading == null ? "" : infoLoading} isShow={infoLoading != null} />
        </PageBg>
    )
}

