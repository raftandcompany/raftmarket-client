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
        let data = pageObj.params["data"].data
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
        // Add this in node_modules/react-dom/index.js
        //const metamaskManager = AppMetamaskManager()
        //metamaskManager.requestQ(Metamask.Request.registListing)
        registListing()

    }

    function registListing(){
        try {
            let registryAddress = this.exchange.getRegistryAddress(Exchange.defaultExchangeAddress)
            let proxyAddress = this.exchange.getProxyAddress(registryAddress)
            console.error(this.TAG, registryAddress)
        } catch (error) {
            console.error(this.TAG, error)
        }
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
                <Button2 children="Create Listing" type="purple"
                         unactive={inputPrice === "" || inputQuantity  === ""}
                         fullSize={true}
                         onClick={e => submit(e)}
                />
            </StyledFullButtonWrap>


        </PageBg>
    )
}

