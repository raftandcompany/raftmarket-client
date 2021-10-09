import React ,{useState} from "react";
import {PageBg} from "style/layoutStyle";
import {fadeIn, slideInUp} from "style/ani";
import AppMetamaskManager from "store/manager/metamask/MetamaskManager"
import * as Metamask from "store/manager/metamask/Metamask"
import {observer} from "mobx-react";
import {Title, TitleLarge} from "style/textStyle";
import {StyledFullButtonWrap} from "style/roundButton";
import BorderRadiusButton from "skeleton/component/button/BorderRadiusButton";

import ImgMetamask from "asset/metamask.png";

export default function PageLogin({pageObj}){
    const TAG = "PageLogin"
    const metamaskManager = AppMetamaskManager()
    const [isInstalled, setInstall] = useState(metamaskManager.isMetaMaskInstalled());
    const ErrorDisplayer = observer(({  metamaskManager }) =>
        <TitleLarge>
            {getStatusText()}
        </TitleLarge>
    )

    const ConnectButton = observer(({ metamaskManager }) => {
            if ( !isInstalled ) {
                return <BorderRadiusButton
                    children="Click here to install MetaMask" type="purple"
                    fullSize={true}
                    onClick={e => {
                        setInstall(true)
                        metamaskManager.requestQ(Metamask.Request.install)
                    }}/>
            } else{
                return <BorderRadiusButton
                    children={ getConnectStatusText() }
                    type="purple"
                    fullSize={true}
                    onClick={e => connectAction()}/>
            }
        }
    )

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
        console.error(TAG,  metamaskManager.error)
        switch (metamaskManager.error.type){
            case Metamask.Error.connect :
                return metamaskManager.error.err.message
            default : return ""
        }
    }
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

    return (
        <PageBg
            isPopup={pageObj.isPopup}
            ani={pageObj.isPopup ? slideInUp : fadeIn}>
            <Title>Need Connect Metamask <br />Raft Market</Title>
            <ErrorDisplayer
                metamaskManager = {metamaskManager}/>
            <div className="img-login">
                <img src={ImgMetamask} alt="metamask" />
            </div>
            <StyledFullButtonWrap>
                <ConnectButton
                    visible = {isInstalled}
                    metamaskManager = {metamaskManager}/>

            </StyledFullButtonWrap>
        </PageBg>
    )
}




