import React ,{useState} from "react";
import {PageBg} from "style/layoutStyle";
import {fadeIn, slideInUp} from "style/ani";

import PageTab from "page/component/tab/PageTab";
import RectButton from "skeleton/component/button/RectButton";

import AppMetamaskManager from "store/manager/metamask/MetamaskManager"
import * as Metamask from "store/manager/metamask/Metamask"
import {observer} from "mobx-react";
import {TextA} from "../../style/textStyle";


export default function PageLogin({pageObj}){
    const [isInstalled, setInstall] = useState(metamaskManager.isMetaMaskInstalled());
    return (
        <PageBg color="black"
                isPopup={pageObj.isPopup}
                ani={pageObj.isPopup ? slideInUp : fadeIn}>
            <PageTab pageObj={pageObj}/>
            <RectButton
                visible ={!isInstalled}
                title={"Click here to install MetaMask!"}
                action={()=>{
                    setInstall(true)
                    metamaskManager.requestQ(Metamask.Request.install)
                }}
            />
            <ConnectButton
                visible = {isInstalled}
                metamaskManager = {metamaskManager}/>
            <ErrorDisplayer
                metamaskManager = {metamaskManager}/>
        </PageBg>
    )
}

const metamaskManager = AppMetamaskManager()
const ConnectButton = observer(({ visible , metamaskManager }) =>
    <RectButton
        key = "ConnectButton"
        visible ={visible}
        title={ getConnectStatusText() }
        action={()=>{ connectAction() }}
    />
    )

const ErrorDisplayer = observer(({  metamaskManager }) =>
    <TextA>
        {getStatusText()}
    </TextA>
)

function getConnectStatusText(){
    switch (metamaskManager.status){
        case Metamask.Status.install :
            return "Reload after installation"
        case Metamask.Status.disconnect :
            return "Connect Metamask"
        case Metamask.Status.connecting :
            return "Connect Metamask"
        case Metamask.Status.connect :
            return "Login Raft market"
        default : return ""
    }
}

function connectAction(){
    switch (metamaskManager.status){
        case Metamask.Status.install :
            alert("please reload after installation")
            break
        case Metamask.Status.disconnect :
            metamaskManager.requestQ(Metamask.Request.connect)
            break
        default : break
    }
}

function getStatusText(){
    if (metamaskManager.error == null ) { return ""}
    switch (metamaskManager.error.type){
        case Metamask.Error.connected :
            return metamaskManager.error.err.message
        default : return ""
    }
}