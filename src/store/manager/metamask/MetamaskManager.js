import {makeAutoObservable} from "mobx";
import MetaMaskOnboarding from "@metamask/onboarding"
import * as Metamask from './Metamask'

class MetamaskManager {
    constructor() {
        this.createObservable()
        this.TAG = "MetamaskManager"
        this.request = null
    }

    createObservable(){
        this.status = this.isMetaMaskInstalled ? Metamask.Status.disconnect : Metamask.Status.uninstall
        this.event = null
        this.error = null
        makeAutoObservable(this)
    }

    destory(){
    }

    requestQ(request){
        switch (request){
            case Metamask.Request.install :
                this.installMetaMask()
                break
            case Metamask.Request.connect :
                this.connectMetaMask()
                break
            default : break
        }
    }

    isMetaMaskInstalled = () => {
        const { ethereum } = window;
        return Boolean(ethereum && ethereum.isMetaMask)
    }

    installMetaMask(){
        this.status = Metamask.Status.install
        const onboarding = new MetaMaskOnboarding()
        onboarding.startOnboarding()
    }

    async connectMetaMask() {
        if (typeof window.ethereum !== 'undefined') {
            console.log(this.TAG, 'MetaMask is installed!')
        }
        let ethereum = window.ethereum
        this.status = Metamask.Status.connecting
        try {
            console.log(this.TAG, 'MetaMask connecting')
            await ethereum.request({method: 'eth_requestAccounts'});
            this.status = Metamask.Status.connected
            this.event = Metamask.Event.connected
        } catch (error) {
            console.error(error);
            this.status = Metamask.Status.disconnect
            this.error = new Metamask.MetamaskError(Metamask.Error.connected, error)
        }
    }
}

const metamaskManager = new MetamaskManager()
export default function AppMetamaskManager() {
    return metamaskManager
}