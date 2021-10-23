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
import AppPagePresenter from "page/PagePresenter";
import * as Rest from "store/rest/Rest";
import FileUploadComponent from "page/component/input/FileUploadComponent";
import Hangul from "hangul-js";

export default function PageEditAsset({pageObj}){
    const TAG = "PageEditAsset"
    const [inputs, setInputs] = useState({
        title: "",
        description: "",
        externalLink: ""
    })
    const [focusName, setFocusName] = useState(null)
    const [assetData, setAssetData] = useState(null)
    let dataProvider = AppDataProvider()
    let disposer = null
    let selectedFile = null
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

        inputs.description = asset.meta.description
        inputs.title = asset.meta.name
        inputs.externalLink = asset.meta.externalLink
        setAssetData(asset)
    }

    function onDisappear (){
        if (disposer != null) {
            disposer()
        }
    }

    function submit(e){
        e.preventDefault()
        updateAsset()
    }

    function onSubscribe(){
        disposer = autorun(() => {
            let response = dataProvider.response
            if (response != null){
                if (response.id !== TAG){return}
                switch (response.type) {
                    case  Rest.ApiType.putAsset :
                        alert("modify asset completed")
                        AppPagePresenter().closePopup(pageObj)
                        break
                }
            }
        })
    }

    function updateAsset() {

        let params = {
            assetId: assetData.assetId,
            chain: assetData.chain,
            collectionAddress: assetData.collectionAddress,
            contents:selectedFile,
            name: inputs.title,
            externalLink: inputs.externalLink,
            description: inputs.description
        }
        dataProvider.requestQ(new DataRequest(Rest.ApiType.putAsset, params, TAG, false))
    }
    
    const onChange = e => {
        const { value, name } = e.target
        setFocusName(name)
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: Hangul.assemble(value) // name 키를 가진 값을 value 로 설정
        })
    }

    const onReset = () => {
        setInputs({
            title: "",
            description:"",
            externalLink:""
        })
    }

    const InputField = ({name, placeHolder, value, isFocus, maxLength= "99" }) =>
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
            <div className="popup-content">
                <FileUploadComponent action={ (file)=>{
                    selectedFile = file
                    console.log(TAG, file)
                }}/>
                <StyledInputWrap key={ uuidv4().toString() }>
                    <InputLabel children="Title" />
                    <InputField
                        name="title"
                        placeHolder="input title"
                        value={inputs.title}
                        isFocus={focusName === "title"}

                    />
                </StyledInputWrap>
                <StyledInputWrap key={ uuidv4().toString() }>
                    <InputLabel children="Description" />
                    <InputField
                        name="description"
                        placeHolder="input description"
                        value={inputs.description}
                        isFocus={focusName === "description"}

                    />
                </StyledInputWrap>

                <StyledInputWrap key={ uuidv4().toString() }>
                    <InputLabel children="ExternalLink" />
                    <InputField
                        name="externalLink"
                        placeHolder="input externalLink"
                        value={inputs.externalLink}
                        isFocus={focusName === "externalLink"}

                    />

                </StyledInputWrap>

                <StyledFullButtonWrap>
                    <BorderRadiusButton children="Modify" type="purple"
                                        fullSize={true}
                                        onClick={e => submit(e)}
                    />
                </StyledFullButtonWrap>
            </div>
        </PageBg>
    )
}

