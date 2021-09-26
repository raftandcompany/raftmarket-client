import React ,  {useState}from "react"
import {autorun, observable, runInAction} from "mobx"
import {v4 as uuidv4} from "uuid"
import {PageBg, Popup, StyledScrollWrap} from "style/layoutStyle"
import {fadeIn, slideInUp} from "style/ani"


import AppDataProvider , {DataRequest}from "store/provider/DataProvider"
import AppMetamaskManager from "store/manager/metamask/MetamaskManager"
import InputLabel from "skeleton/component/input/InputLabel";
import InputText from "skeleton/component/input/InputText";
import {StyledInputWrap} from "style/formStyle";
import Button2 from "skeleton/component/button/BorderRadiusButton";
import {StyledFullButtonWrap} from "style/roundButton";
import PageTab from "page/component/tab/PageTab";
import * as Metamask from "store/manager/metamask/Metamask";
import * as Exchange from "store/manager/exchange/exchange";

export default function PageCreateListing({pageObj}){
    const TAG = "PageCreateListing"
    const [inputPrice, setPrice] = useState("")
    const [inputQuantity, setQuantity] = useState("")

    let dataProvider = AppDataProvider()
    let disposer = null
    let exchange = Exchange.default
    let assetData = null
    let isHold = false
    React.useEffect(() => {
        onAppear()
        onSubscribe()
        return () => onDisappear ()
    }, []);

    function onAppear (){
        console.log(TAG, "onAppear")
        observable(this,dataProvider)
        console.log(TAG,pageObj)
        let address = AppMetamaskManager().accounts[0]
        assetData = pageObj.params["data"].data
    }

    function onSubscribe(){
        disposer = autorun(() => {

        })
    }
    function onDisappear (){
        if (disposer != null) {
            disposer()
        }
    }

    function submit(e){
        e.preventDefault()
        checkRegistAddress()

    }
    function checkRegistAddress(){
        console.log(TAG + " checkRegistAddress", "init")
        try {
            let registryAddress = exchange.getRegistryAddress({
                exchangeAddress : Metamask.ExchangeKey.defaultAddress
            })

            registryAddress.then(
                (address)=>{
                    console.log(TAG + " checkRegistAddress registryAddress", address)
                    let proxyAddress = exchange.getProxyAddress({
                        registryAddress: address
                    })
                    proxyAddress.then(
                        (address)=>{
                            console.log(TAG + " checkRegistAddress", address)
                            if (address === Metamask.ExchangeKey.unregistAdress) {
                                if(isHold){
                                    console.log(TAG + " checkRegistAddress", "retry check")
                                } else {
                                    console.log(TAG + " checkRegistAddress", "registAdress")
                                    registAdress(address)
                                }
                            } else {
                                isHold = false
                                console.log(TAG + "checkRegistAddress", "success")
                                checkApprovedNft(address)
                            }
                        },
                        (error)=>{
                            isHold = false
                            console.error(TAG + " checkRegistAddress", error)
                        })
                },
                (error)=>{
                    isHold = false
                    console.error(TAG + " checkRegistAddress", error)
                })


        } catch (error) {
            isHold = false
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
                        console.log(TAG + " registAdress", "denied")
                    } else {
                        isHold = true
                        console.log(TAG + " registAdress", "success")
                        checkRegistAddress()
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

    function checkApprovedNft(proxyAddress){
        console.log(TAG + "checkApprovedNfts", "init")
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
                        registListing(proxyAddress)
                    } else{
                        if(isHold){
                            console.log(TAG + "checkApprovedNfts", "retry check")
                        } else {
                           console.log(TAG + " checkApprovedNfts", "registApprovedNft")
                           registApprovedNft(proxyAddress)
                        }

                    }
                },
                (error)=>{
                    isHold = false
                    console.error(TAG + " checkApprovedNfts", error)
                })

        } catch (error) {
            isHold = false
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
                        console.log(TAG + " registApprovedNft", "denied")
                    } else {
                        isHold = true
                        console.log(TAG + " registApprovedNft", "success")
                        checkApprovedNft(proxyAddress)
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

    function registListing(proxyAddress){
        console.log(TAG + "registListing", proxyAddress)

    }



    return (
        <PageBg
            isPopup={pageObj.isPopup}
            ani={pageObj.isPopup ? slideInUp : fadeIn}>
            <PageTab pageObj={pageObj}/>
            <StyledInputWrap key={ uuidv4().toString() }>
                <InputLabel children="Price" />
                <InputText placeHolder="Sale Price"
                           defaultValue={ inputPrice }
                           height={48} fontSize={14}
                           onChange={e=>setPrice(e.target.value)}
                />
            </StyledInputWrap>
            <StyledInputWrap key={ uuidv4().toString() }>
                <InputLabel children="Quantity" />
                <InputText placeHolder="Sale Quantity"
                           defaultValue={ inputQuantity }
                           height={48} fontSize={14}
                           onChange={e=>setQuantity(e.target.value)}
                />
            </StyledInputWrap>

            <StyledFullButtonWrap>
                <Button2 children="Create Offer" type="purple"
                         unactive={inputPrice === "" || inputQuantity  === ""}
                         fullSize={true}
                         onClick={e => submit(e)}
                />
            </StyledFullButtonWrap>
        </PageBg>
    )
}

