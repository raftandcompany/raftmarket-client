import React ,  {useState}from "react"
import {autorun,  observable} from "mobx"
import {v4 as uuidv4} from "uuid"
import {PageBg, Popup, StyledScrollWrap} from "style/layoutStyle"
import {fadeIn, slideInUp} from "style/ani"


import AppDataProvider , {DataRequest}from "store/provider/DataProvider"
import AppMetamaskManager from "store/manager/metamask/MetamaskManager"
import InputLabel from "../../../skeleton/component/input/InputLabel";
import InputText from "../../../skeleton/component/input/InputText";
import {StyledInputWrap} from "../../../style/formStyle";
import Button2 from "../../../skeleton/component/button/BorderRadiusButton";
import {StyledFullButtonWrap} from "../../../style/roundButton";
import PageTab from "../../component/tab/PageTab";


export default function PageCreateOffer({pageObj}){
    const TAG = "PageCreateOffer"
    const [inputPrice, setPrice] = useState("")
    const [inputQuantity, setQuantity] = useState("")

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

