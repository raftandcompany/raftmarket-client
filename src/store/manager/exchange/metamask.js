import metamask from '@metamask/onboarding'
import {ethers} from 'ethers'

const ethereum = window.ethereum

const ZeroHex = '0x00'

function convertAbi(originAbi) {
    const abi = []
    originAbi.map((method,i)=>{
        if (method.name !== undefined) {
            let item = method.type + ' ' + method.name

            const inputs = []
            method.inputs.map((input, i)=>{
                inputs.push(input.type)
            })

            item += '('+inputs.join(',')+')'

            if (method.stateMutability === 'view' || method.stateMutability === 'pure' || method.stateMutability === 'payable') {
                item += ' ' + method.stateMutability
            }

            if (method.outputs !== undefined) {
                const outputs = []
                method.outputs.map((output, i) => {
                    outputs.push(output.type)
                })
                item += ' returns (' + outputs.join(',') + ')'
            }

            abi.push(item)
        }
    })
    return abi
}

const Metamask = {
    // 메타마스크 설치 여부 확인
    isInstalled: () => {
        return metamask.isMetaMaskInstalled()
    },
    install: () => {
        const forwarderOrigin = window.location.protocol + '//' + window.location.host + '/'
        new metamask({ forwarderOrigin }).startOnboarding()
    },
    // 상태 조회
    chainId: () => {
        return ethereum.chainId
    },
    // 메타마스크 연결
    onBoarding: async () => {
        const result = await ethereum.request({method: 'eth_requestAccounts'})
        return result[0]
    },
    // 메타마스크 지갑주소 가져오기
    getAccount: async () => {
        const accounts = await ethereum.request({
            method: 'eth_accounts',
        })
        if (accounts === null || accounts.length === 0) {
            return null
        }
        return accounts[0]
    },
    // 이더 수량 조회
    getBalance: async (account) => {
        const balance = await ethereum.request({
            method: 'eth_getBalance',
            params: [account, 'latest'],
        })
        
        // const a = ethers.BigNumber.from(balance)
        // console.log(a.toString())
        // return ethers.utils.parseEther(balance).toString()
        
        return ethers.utils.formatEther(balance)
    },
    // 컨트랙트 연결
    getContract: (address, abi) => {
        const provider = new ethers.providers.Web3Provider(ethereum)
        console.log(provider)
        const contract = new ethers.Contract(address, convertAbi(abi), provider).connect(provider.getSigner())
        return contract
    },
    getSigner: () => {
        const provider = new ethers.providers.Web3Provider(ethereum)
        console.log(provider)
        return provider.getSigner()
    },
    // 서명
    sign: async (address, message) => {
        const sig = await ethereum.request({
            method: 'personal_sign',
            params: [address, message]
        })

        return sig
    },
    sigToVRS: (sig) => {
        return {
            r: sig.slice(0, 66),
            s: '0x'+sig.slice(66,130),
            v: '0x'+sig.slice(130,132),
        }
    },
    // 서명 복구
    // recover: async (message, sig) => {
    //     const web3 = new Web3(ethereum)
    //     const rec = await web3.eth.personal.ecRecover(message, sig)
    //     return rec
    // },
    // 컨트랙트 배포
    deployContract: async (from, data) => {
        return await sendTransaction(from, '0x', data)
    },
    /*
        이벤트 핸들러
    */
   // 연결 이벤트 핸들러
   onConnected: (handler) => {
        ethereum.on('connect', (connectInfo) => {
            handler(connectInfo)
        })
    },
    // 연결해제 이벤트 핸들러
    onDisconnected: (handler) => {
        ethereum.on('disconnect', (err) => {
            handler(err)
        })
    },
    // 주소 변경 이벤트 핸들러
    onAccountChanged: (handler) => {
        ethereum.on('accountsChanged', (accounts) => {
            handler(accounts[0])
        })
    },
    // 네트워크 변경 이벤트 핸들러
    onChainChanged: (handler) => {
        ethereum.on('chainChanged', (chainId) => {
            handler(chainId)
        })
    }
}

// 컨트랙트로 트랜잭션 전송
async function sendTransaction(from, contract, data) {
    return await ethereum.request({
        method: 'eth_sendTransaction',
        params: [{
            from: from,
            to: contract,
            value: ZeroHex,
            data: data,
            // nonce: autofilled
            // gas: autofilled
            // gasPrice: autofilled
        }]
    })
}

export default Metamask