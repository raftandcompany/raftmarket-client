import {makeAutoObservable, runInAction} from "mobx";
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
        this.accounts = null
        makeAutoObservable(this)
        this.subscribe()
    }

    destory(){
    }

    subscribe(){
        if(!this.isMetaMaskInstalled()) {return}
        let ethereum = window.ethereum
        ethereum.on("accountsChanged", (account) => {
            console.log(this.TAG, account)
            this.getAccount()
        })
    }

    requestQ(request){
        switch (request){
            case Metamask.Request.install :
                this.installMetaMask()
                break
            case Metamask.Request.connect :
                this.connectMetaMask()
                break
            case Metamask.Request.autoConnect :
                this.connectMetaMask(true)
                break
            case Metamask.Request.getAccount :
                this.getAccount()
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

    async connectMetaMask(isAutoConnect = false) {
        if (typeof window.ethereum === 'undefined') {
            console.error(this.TAG, 'MetaMask is uninstalled!')
            this.error = new Metamask.MetamaskError(Metamask.Error.autoConnect,null)
            return
        }
        let ethereum = window.ethereum
        this.status = Metamask.Status.connecting
        try {
            console.log(this.TAG, 'MetaMask connecting')
            await ethereum.request({method: 'eth_requestAccounts'});
            runInAction(() => {
                this.status = Metamask.Status.connected
                this.event = Metamask.Event.connected
            })

        } catch (error) {
            console.error(this.TAG, error);
            runInAction(() => {
                this.status = Metamask.Status.disconnect
                this.error = new Metamask.MetamaskError(
                    isAutoConnect ? Metamask.Error.autoConnect : Metamask.Error.connect, error)
            })
        }
    }

    async getAccount() {
        if (typeof window.ethereum === 'undefined') {
            console.error(this.TAG, 'MetaMask is uninstalled!')
            this.error = new Metamask.MetamaskError(Metamask.Error.autoConnect,null)
            return
        }
        let ethereum = window.ethereum
        try {
            console.log(this.TAG, 'MetaMask get accounts')
            const accounts = await ethereum.request({ method: 'eth_accounts' });
            runInAction(() => {
                console.log(this.TAG, accounts)
                this.accounts = accounts
            })

        } catch (error) {
            console.error(this.TAG, error);
            runInAction(() => {
                this.error = new Metamask.MetamaskError(Metamask.Error.getAccount, error)
            })
        }
    }
}

const metamaskManager = new MetamaskManager()
export default function AppMetamaskManager() {
    return metamaskManager
}