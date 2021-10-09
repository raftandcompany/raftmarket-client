import React ,  {useState}from "react"
import {autorun, observable, runInAction} from "mobx"
import {v4 as uuidv4} from "uuid"
import {PageBg, Popup, StyledScrollWrap} from "style/layoutStyle"
import {fadeIn, slideInUp} from "style/ani"
import {StyledInputWrap} from "style/formStyle";
import {StyledFullButtonWrap} from "style/roundButton";
import AppDataProvider , {DataRequest}from "store/provider/DataProvider"
import InputLabel from "skeleton/component/input/InputLabel";
import InputText from "skeleton/component/input/InputText";
import BorderRadiusButton from "skeleton/component/button/BorderRadiusButton";
import PageTab from "page/component/tab/PageTab";
import * as Metamask from "store/manager/metamask/Metamask";
import * as Exchange from "store/manager/exchange/exchange";
import AppPagePresenter from "../../PagePresenter";
import * as Rest from "../../../store/rest/Rest";
import {AssetData} from "../../component/item/ItemAsset";
import {OrderData} from "../../component/item/ItemOrder";



export default function PageCreateListing({pageObj}){
    const TAG = "PageCreateListing"
    const [inputs, setInputs] = useState({
        price: "",
        expireDate: ""
    })
    const [focusName, setFocusName] = useState(null)
    const [assetData, setAssetData] = useState(null)

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
        clearRegistChecker()
        clearApprovedChecker()
    }

    function submit(e){
        e.preventDefault()
        const priceValue =  parseInt(inputs.price);
        if (isNaN(priceValue)) {
            alert("wrong price")
            return
        }
        const expireValue =  parseInt(inputs.expireDate)
        if (isNaN(expireValue)) {
            alert("wrong expire date")
            return
        }
        checkRegistAddress()
    }

    function onSubscribe(){
        disposer = autorun(() => {
            let response = dataProvider.response
            if (response != null){
                if (response.id !== TAG){return}
                switch (response.type) {
                    case  Rest.ApiType.postListing :
                        console.log(TAG + " postListing", response.data)
                        break
                }
            }
        })
    }

    function registOrder(order){
        console.log(TAG + " registOrder", order)
        console.log(TAG + " registOrder", assetData)
        let params = {
            id: order.id,
            collectionAddress: assetData.collectionAddress,
            assetId: assetData.assetId,
            status: "OPENED",
            exchange: "exchange1",
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
        dataProvider.requestQ(new DataRequest(Rest.ApiType.postListing, params, TAG,false))
    }

    function registListing(proxyAddress){
        console.log(TAG + " registListing", proxyAddress)
        const priceValue =  parseInt(inputs.price);
        const expireValue =  parseInt(inputs.expireDate)
        const expirationTime = Math.round((Date.now() + (expireValue * 1000 * 3600 * 24)) / 1000)
        console.log(TAG + " expirationTime", expirationTime)
        try {
            let sign = exchange.listing({
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
                    console.log(TAG + " registListing", order)
                    registOrder(order)
                },
                (error)=>{
                    console.error(TAG + " registListings", error)
                })
        } catch (error) {
            console.error(TAG + " registListing", error)
        }

    }



    let autoRegistChecker = null
    function createRegistChecker(){
        clearRegistChecker()
        autoRegistChecker = setTimeout(() => {
            checkRegistAddress()
        }, 2000)
    }
    function clearRegistChecker(){
        if (autoRegistChecker != null){
            clearInterval(autoRegistChecker)
        }
    }
    function checkRegistAddress(){
        console.log(TAG + " checkRegistAddress", "init")
        try {
            let registryAddressResult = exchange.getRegistryAddress({
                exchangeAddress : Metamask.ExchangeKey.defaultAddress
            })
            registryAddressResult.then(
                (registryAddress)=>{
                    console.log(TAG + " checkRegistAddress registryAddress", registryAddress)
                    let proxyAddressResult = exchange.getProxyAddress({
                        registryAddress: registryAddress
                    })
                    proxyAddressResult.then(
                        ( proxyAddress)=>{
                            console.log(TAG + " checkRegistAddress", proxyAddress)
                            if (proxyAddress === Metamask.ExchangeKey.unregistAdress) {
                                if(isHold){
                                    console.log(TAG + " checkRegistAddress", "retry check")
                                    createRegistChecker()
                                } else {
                                    console.log(TAG + " checkRegistAddress", "registAdress")
                                    registAdress(registryAddress)
                                }
                            } else {
                                clearRegistChecker()
                                checkApprovedNft(proxyAddress)
                            }
                        },
                        (error)=>{
                            isHold = false
                            clearRegistChecker()
                            console.error(TAG + " checkRegistAddress", error)
                        })
                },
                (error)=>{
                    isHold = false
                    clearRegistChecker()
                    console.error(TAG + " checkRegistAddress", error)
                })


        } catch (error) {
            isHold = false
            clearRegistChecker()
            console.error(TAG + " checkRegistAddress", error)
        }
    }
    function registAdress(registryAddress){
        console.log(TAG + " registAdress init", registryAddress)
        try {
            let hash = exchange.registerProxy({registryAddress:registryAddress})
            hash.then(
                (token)=>{
                    console.log(TAG + " registAdress", token)
                    if (token == null){
                        isHold = false
                        console.log(TAG + " registAdress", "denied")
                        AppPagePresenter().closePopup(pageObj)
                    } else {
                        isHold = true
                        console.log(TAG + " registAdress", "success")
                        createRegistChecker()

                    }
                },
                (error)=>{
                    isHold = false
                    console.error(TAG + " registAdress", error)
                })
        } catch (error) {
            isHold = false
            console.error(TAG + " registAdress", error)
        }
    }

    let autoApprovedChecker = null
    function createApprovedChecker(proxyAddress){
        clearApprovedChecker()
        autoApprovedChecker = setTimeout(() => {
            checkApprovedNft(proxyAddress)
        }, 2000)
    }
    function clearApprovedChecker(){
        if (autoApprovedChecker != null){
            clearInterval(autoApprovedChecker)
        }
    }
    function checkApprovedNft(proxyAddress){
        console.log(TAG + "checkApprovedNfts", assetData)
        try {
            let aprovedNft = exchange.isApprovedNft({
                nftAddress : assetData.collectionAddress,
                proxyAddress : proxyAddress
            })
            console.log(TAG, aprovedNft)
            aprovedNft .then(
                (isApproved)=>{
                    console.log(TAG + " checkApprovedNfts", isApproved)
                    if (isApproved == true){
                        isHold = false
                        console.log(TAG + "checkApprovedNfts", "success")
                        clearApprovedChecker()
                        registListing(proxyAddress)
                    } else{
                        if(isHold){
                           createApprovedChecker(proxyAddress)
                        } else {
                           console.log(TAG + " checkApprovedNfts", "registApprovedNft")
                           registApprovedNft(proxyAddress)
                        }
                    }
                },
                (error)=>{
                    isHold = false
                    clearApprovedChecker()
                    console.error(TAG + " checkApprovedNfts", error)
                })

        } catch (error) {
            isHold = false
            clearApprovedChecker()
            console.error(TAG + " checkApprovedNfts", error)

        }
    }

    function registApprovedNft(proxyAddress){
        console.log(TAG + "registApprovedNft", "init")
        try {
            let hash = exchange.approvalNft({
                nftAddress : assetData.collectionAddress,
                proxyAddress : proxyAddress
            })
            hash.then(
                (token)=>{
                    console.log(TAG + " registApprovedNft", token)
                    if (token == null){
                        isHold = false
                        console.log(TAG + " registApprovedNft", "denied")
                        AppPagePresenter().closePopup(pageObj)
                    } else {
                        isHold = true
                        console.log(TAG + " registApprovedNft", "success")
                        createApprovedChecker(proxyAddress)
                    }
                },
                (error)=>{
                    isHold = false
                    console.error(TAG + " registApprovedNft", error)
                })

        } catch (error) {
            isHold = false
            console.error(TAG + " registApprovedNft", error)
        }
    }


    const onChange = e => {
        const { value, name } = e.target
        setFocusName(name)
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        })
    }

    const onReset = () => {
        setInputs({
            price: "",
            expireDate: ""
        })
    }

    const InputField = ({name, placeHolder, value, isFocus, maxLength= "3" }) =>
        isFocus ?
            <InputText placeHolder={placeHolder}
                       name={name}
                       height={48} fontSize={14}
                       onChange={onChange}
                       value={value}
                       autoFocus
                       maxLength ={maxLength}

            />
        :
            <InputText placeHolder={placeHolder}
                       name={name}
                       height={48} fontSize={14}
                       onChange={onChange}
                       value={value}
                       maxLength = {maxLength}

            />

    return (
        <PageBg
            isPopup={pageObj.isPopup}
            ani={pageObj.isPopup ? slideInUp : fadeIn}>
            <PageTab pageObj={pageObj}/>
            <StyledInputWrap key={ uuidv4().toString() }>
                <InputLabel children="Price" />
                <InputField
                    name="price"
                    placeHolder="Sale Price"
                    value={inputs.price}
                    isFocus={focusName === "price"}

                />
            </StyledInputWrap>
            <StyledInputWrap key={ uuidv4().toString() }>
                <InputLabel children="Expire Date" />
                <InputField
                    name="expireDate"
                    placeHolder="rom"
                    value={inputs.expireDate}
                    isFocus={focusName === "expireDate"}

                />

            </StyledInputWrap>

            <StyledFullButtonWrap>
                <BorderRadiusButton children="Create Listing" type="purple"
                         unactive={inputs.price === "" || inputs.expireDate  === ""}
                         fullSize={true}
                         onClick={e => submit(e)}
                />
            </StyledFullButtonWrap>

        </PageBg>
    )
}

