import {makeAutoObservable, runInAction} from "mobx";
import MetaMaskOnboarding from "@metamask/onboarding"
import * as Metamask from './Metamask'
import * as Exchange  from "store/manager/exchange/exchange";


class MetamaskManager {
    constructor() {
        this.createObservable()
        this.TAG = "MetamaskManager"
        this.request = null
        this.exchange = Exchange.default

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
            case Metamask.Request.checkAccountStatus :
                this.checkAccountStatus()
                break
            case Metamask.Request.registListing :
                this.registListing()
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

    checkEthereum(){
        if (typeof window.ethereum === 'undefined') {
            console.error(this.TAG, 'MetaMask is uninstalled!')
            this.error = new Metamask.MetamaskError(Metamask.Error.autoConnect,null)
            return false
        }
        return true
    }

    async connectMetaMask(isAutoConnect = false) {
        if (!this.checkEthereum()) { return }
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
        if (!this.checkEthereum()) { return }
        let ethereum = window.ethereum
        try {
            console.log(this.TAG, 'getAccount')
            const accounts = await ethereum.request({ method: 'eth_accounts' });
            runInAction(() => {
                console.log(this.TAG, accounts)
                if (accounts.length == 0){
                    this.accounts = null
                    this.error = new Metamask.MetamaskError(Metamask.Error.checkAccountStatus)
                    console.log(this.TAG, 'checkAccountStatus error')
                    return
                }
                this.accounts = accounts
            })

        } catch (error) {
            console.error(this.TAG, error);
            runInAction(() => {
                this.error = new Metamask.MetamaskError(Metamask.Error.getAccount, error)
            })
        }
    }

    async checkAccountStatus() {
        if (!this.checkEthereum()) { return }
        let ethereum = window.ethereum
        try {
            console.log(this.TAG, 'checkAccountStatus')
            const accounts = await ethereum.request({ method: 'eth_accounts' });
            runInAction(() => {
                console.log(this.TAG, accounts)
                if (accounts.length == 0){
                    this.accounts = null
                    this.error = new Metamask.MetamaskError(Metamask.Error.checkAccountStatus)
                    console.log(this.TAG, 'checkAccountStatus error')
                    return
                }
                if(this.accounts[0] !== accounts[0]){
                    this.accounts = null
                    this.error = new Metamask.MetamaskError(Metamask.Error.checkAccountStatus)
                    console.log(this.TAG, 'checkAccountStatus error')

                } else {
                    this.event = Metamask.Event.avaibleAccountStatus
                    console.log(this.TAG, 'checkAccountStatus success')
                }
            })

        } catch (error) {
            console.error(this.TAG, error);
            runInAction(() => {
                this.accounts = null
                this.error = new Metamask.MetamaskError(Metamask.Error.checkAccountStatus)
            })
        }
    }

    registListing(){
        try {
            let registryAddress = this.exchange.getRegistryAddress(Exchange.defaultExchangeAddress)
           // let proxyAddress = this.exchange.getProxyAddress(registryAddress)
            console.error(this.TAG, registryAddress)
        } catch (error) {
            console.error(this.TAG, error)
        }
    }


}

const metamaskManager = new MetamaskManager()
export default function AppMetamaskManager() {
    return metamaskManager
}