import exchangeAbi from './exchange_abi.json'
import registryAbi from './registry_abi.json'
import NftAbi from './erc721_abi.json'
import TokenAbi from './erc20_abi.json'
import Metamask from './metamask'
import {ethers} from 'ethers'
import crypto from 'crypto'

const ethereum = window.ethereum


const Define = {
    NullAddress: '0x0000000000000000000000000000000000000000',
    NullBytes: [],
    NullByte32: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    CallFunction: {
        'erc-721': '23b872dd',
        'erc-1155': 'f242432a'
    },
    ReplacementPattern: {
        Buy:    "0x00000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        Sell:   "0x000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000"
    },
    ProtocolFee: 0,
    FeeMethod: 1,
    SaleKind: 0,
    HowToCall: 0,
    Extra: 0,
    SideBuy: 0,
    SideSell: 1,
}

const loadContract = (address) => {
    const contract = Metamask.getContract(address, exchangeAbi)
    
    return contract
}

const loadRegistry = (address) => {
    const contract = Metamask.getContract(address, registryAbi)
    return contract
}

const loadNftContract = (address) => {
    const contract = Metamask.getContract(address, NftAbi)

    return contract
}

const loadTokenContract = (address) => {
    return Metamask.getContract(address, TokenAbi)
}

const bigIntToHex = (value) => {
    return ethers.BigNumber.from(value)._hex.replace('0x', '').padStart(64, '0')
}

const genSalt = () => {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(32, (err, buf) => {
            if (err) reject(err);
            else {
                resolve('0x'+buf.toString('hex'))
            }
        })
    })
}

// API 로 조회한 Order 를 컨트랙트 호출용 Order 로 변환
const convertOrder = (apiOrder) => {
    if (apiOrder.orderType !== 'LISTINGS' && apiOrder.orderType !== 'OFFERS') {
        return apiOrder
    }

    const vrs = Metamask.sigToVRS(apiOrder.signature)

    return {
        exchange: apiOrder.exchange,
        maker: apiOrder.maker,
        taker: Define.NullAddress,
        makerRelayerFee: apiOrder.makerRelayerFee,
        takerRelayerFee: apiOrder.takerRelayerFee,
        makerProtocolFee: Define.ProtocolFee,
        takerProtocolFee: Define.ProtocolFee,
        feeRecipient: apiOrder.feeRecipient,
        feeMethod: Define.FeeMethod,
        side: apiOrder.orderType === 'LISTINGS' ? Define.SideSell : Define.SideBuy,
        saleKind: Define.SaleKind,
        target: apiOrder.collectionAddress,
        howToCall: Define.HowToCall,
        callData: apiOrder.callData,
        replacementPattern: apiOrder.orderType === 'LISTINGS' ? Define.ReplacementPattern.Sell : Define.ReplacementPattern.Buy,
        staticTarget: Define.NullAddress,
        staticExtradata: Define.NullBytes,
        paymentToken: apiOrder.paymentToken,
        basePrice: apiOrder.basePrice,
        extra: Define.Extra,
        listingTime: apiOrder.listingTime,
        expirationTime: apiOrder.expirationTime,
        salt: apiOrder.salt,
        v: vrs.v,
        r: vrs.r,
        s: vrs.s,
    }
}

const extractAddrs = (order) => {
    return [
        order.exchange, 
        order.maker, 
        order.taker, 
        order.feeRecipient, 
        order.target, 
        order.staticTarget, 
        order.paymentToken
    ]
}

const extractUints = (order) => {
    return [
        order.makerRelayerFee, 
        order.takerRelayerFee, 
        order.makerProtocolFee, 
        order.takerProtocolFee, 
        order.basePrice, 
        order.extra, 
        order.listingTime,
        order.expirationTime,
        order.salt,
    ]
}

const Exchange = {
    // Registry Contract 주소 확인
    getRegistryAddress: async ({
        exchangeAddress,
    }) => {

        const exchange = loadContract(exchangeAddress)
        return await exchange.registry()
    },
    // Registry Contract 를 통해 Proxy 주소 확인
    // Proxy 등록이 안되어있으면 0x0000000000000000000000000000000000000000 리턴
    getProxyAddress: async ({
        registryAddress,
    }) => {
        const account = await Metamask.getAccount()
        const registry = loadRegistry(registryAddress)

        const proxyAddress = await registry.proxies(account)
        return proxyAddress
    },
    // Register Contract 를 통해 Proxy 주소 등록
    registerProxy: async({
        registryAddress,
    }) => {
        const registry = loadRegistry(registryAddress)
        try {
            const tx = await registry.registerProxy()
            return tx.hash
        } catch (err) {
            console.log(err)
            return null
        }
    },
    // NFT 토큰 Approval 여부 확인
    isApprovedNft: async({
        nftAddress,
        proxyAddress,
    }) => {
        const account = await Metamask.getAccount()
        const contract = loadNftContract(nftAddress)

        return await contract.isApprovedForAll(account, proxyAddress.toLowerCase())
    },
    // NFT 토큰 Approval 액션
    approvalNft: async({
        nftAddress,
        proxyAddress,
    }) => {
        const contract = loadNftContract(nftAddress)

        try {
            const tx = await contract.setApprovalForAll(proxyAddress, true)
            return tx.hash
        } catch (err) {
            console.log(err)
            return null
        }
    },
    // 코인 Proxy 주소 확인
    getTokenProxyAddress: async({exchangeAddress}) => {
        const exchange = loadContract(exchangeAddress)
        return await exchange.tokenTransferProxy()
    },
    // 코인 Approval 여부 확인
    allowance: async({
        tokenAddress,
        tokenProxyAddress,
    }) => {
        const account = await Metamask.getAccount()
        const contract = loadTokenContract(tokenAddress)

        const result = await contract.allowance(account, tokenProxyAddress)
        return result._hex
    },
    // 코인 Approval 액션
    approvalToken: async({
        tokenAddress,
        tokenProxyAddress,
    }) => {
        const contract = loadTokenContract(tokenAddress)
        try {
            const tx = await contract.approve(tokenProxyAddress, '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
            return tx.hash
        } catch (err) {
            console.log(err)
            return null
        }
    },
    // 판매 등록
    listing: async ({
        exchangeAddress,
        feeRecipient,
        feeRatio,
        collectionAddress,
        tokenId,
        protocol,
        currencyAddress,
        price,
        expirationTime,
    }) => {
        const account = await Metamask.getAccount()
        const order = {
            exchange: exchangeAddress,
            maker: account,
            taker: Define.NullAddress,
            makerRelayerFee: feeRatio,
            takerRelayerFee: 0,
            makerProtocolFee: Define.ProtocolFee,
            takerProtocolFee: Define.ProtocolFee,
            feeRecipient: feeRecipient,
            feeMethod: Define.FeeMethod,
            side: Define.SideSell,
            saleKind: Define.SaleKind,
            target: collectionAddress,
            howToCall: Define.HowToCall,
            callData: "0x" + Define.CallFunction[protocol] + "000000000000000000000000" + account.replace('0x', '') + "0000000000000000000000000000000000000000000000000000000000000000" + bigIntToHex(tokenId),
            replacementPattern: Define.ReplacementPattern.Sell,
            staticTarget: Define.NullAddress,
            staticExtradata: Define.NullBytes,
            paymentToken: currencyAddress,
            basePrice: price,
            extra: Define.Extra,
            listingTime: Math.floor(new Date().getTime() / 1000),
            expirationTime: expirationTime,
            salt: await genSalt(),
        }
        
        const addrs = extractAddrs(order)
        const uints = extractUints(order)

        const contract = loadContract(exchangeAddress)

        const hash = await contract.hashOrder_(addrs, uints,
            order.feeMethod, 
            order.side, 
            order.saleKind, 
            order.howToCall, 
            order.callData, 
            order.replacementPattern, 
            order.staticExtradata,
        )
        order.id = hash
        
        const sig = await Metamask.sign(account, hash)
        order.signature = sig
        
        const vrs = Metamask.sigToVRS(sig)
        const validResult = await contract.validateOrder_(addrs, uints, 
            order.feeMethod, 
            order.side, 
            order.saleKind, 
            order.howToCall, 
            order.callData, 
            order.replacementPattern, 
            order.staticExtradata,
            vrs.v, vrs.r, vrs.s)
        
        order.v = vrs.v
        order.r = vrs.r
        order.s = vrs.s

        console.log(order)

        return order
    },
    // 구매
    buy: async (
        sellOrder, {
            exchangeAddress,
            feeRecipient,
            feeRatio,
            collectionAddress,
            tokenId,
            protocol,
            currencyAddress,
            price,
            expirationTime,
        }
    ) => {
        const account = await Metamask.getAccount()
        sellOrder = convertOrder(sellOrder)
        console.log(sellOrder)
        const buyOrder = {
            exchange: exchangeAddress,
            maker: account,
            taker: sellOrder.maker,
            makerRelayerFee: sellOrder.makerRelayerFee,
            takerRelayerFee: sellOrder.takerRelayerFee,
            makerProtocolFee: Define.ProtocolFee,
            takerProtocolFee: Define.ProtocolFee,
            feeRecipient: Define.NullAddress,
            feeMethod: sellOrder.feeMethod,
            side: Define.SideBuy,
            saleKind: sellOrder.saleKind,
            target: collectionAddress,
            howToCall: sellOrder.howToCall,
            callData: "0x" + Define.CallFunction[protocol] + "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" + account.replace('0x', '') + bigIntToHex(tokenId),
            replacementPattern: Define.ReplacementPattern.Buy,
            staticTarget: Define.NullAddress,
            staticExtradata: Define.NullBytes,
            paymentToken: currencyAddress,
            basePrice: price,
            extra: Define.Extra,
            listingTime: sellOrder.listingTime,
            expirationTime: expirationTime,
            salt: await genSalt(),
        }

        const contract = loadContract(exchangeAddress)
        
        const addrs = [
            buyOrder.exchange, 
            buyOrder.maker, 
            buyOrder.taker, 
            buyOrder.feeRecipient, 
            buyOrder.target, 
            buyOrder.staticTarget, 
            buyOrder.paymentToken,
            sellOrder.exchange, 
            sellOrder.maker, 
            sellOrder.taker, 
            sellOrder.feeRecipient, 
            sellOrder.target, 
            sellOrder.staticTarget, 
            sellOrder.paymentToken,
        ]
        const uints = [
            buyOrder.makerRelayerFee, 
            buyOrder.takerRelayerFee, 
            buyOrder.makerProtocolFee, 
            buyOrder.takerProtocolFee, 
            buyOrder.basePrice, 
            buyOrder.extra, 
            buyOrder.listingTime,
            buyOrder.expirationTime,
            buyOrder.salt,
            sellOrder.makerRelayerFee, 
            sellOrder.takerRelayerFee, 
            sellOrder.makerProtocolFee, 
            sellOrder.takerProtocolFee, 
            sellOrder.basePrice, 
            sellOrder.extra, 
            sellOrder.listingTime,
            sellOrder.expirationTime,
            sellOrder.salt,
        ]
        const uints8 = [
            buyOrder.feeMethod,
            buyOrder.side,
            buyOrder.saleKind,
            buyOrder.howToCall,
            sellOrder.feeMethod,
            sellOrder.side,
            sellOrder.saleKind,
            sellOrder.howToCall,
        ]
    
        try {
            const tx = await contract.atomicMatch_(
                addrs, uints, uints8,
                buyOrder.callData, 
                sellOrder.callData, 
                buyOrder.replacementPattern, 
                sellOrder.replacementPattern, 
                buyOrder.staticExtradata, 
                sellOrder.staticExtradata,
                [sellOrder.v,sellOrder.v],
                [sellOrder.r,sellOrder.s,sellOrder.r,sellOrder.s,Define.NullByte32],
                {
                    from: account,
                    value: sellOrder.basePrice,
                }
            )

            return tx.hash
        } catch (err) {
            console.log(err)
            return null
        }
    },
    // 제안 등록
    offering: async ({
        exchangeAddress,
        feeRecipient,
        feeRatio,
        collectionAddress,
        tokenId,
        protocol,
        currencyAddress,
        price,
        expirationTime,
    }) => {
        const account = await Metamask.getAccount()
        const order = {
            exchange: exchangeAddress,
            maker: account,
            taker: Define.NullAddress,
            makerRelayerFee: 0,
            takerRelayerFee: feeRatio,
            makerProtocolFee: Define.ProtocolFee,
            takerProtocolFee: Define.ProtocolFee,
            feeRecipient: feeRecipient,
            feeMethod: Define.FeeMethod,
            side: Define.SideBuy,
            saleKind: Define.SaleKind,
            target: collectionAddress,
            howToCall: Define.HowToCall,
            callData: "0x" + Define.CallFunction[protocol] + "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" + account.replace('0x', '') + bigIntToHex(tokenId),
            replacementPattern: Define.ReplacementPattern.Buy,
            staticTarget: Define.NullAddress,
            staticExtradata: Define.NullBytes,
            paymentToken: currencyAddress,
            basePrice: price,
            extra: Define.Extra,
            listingTime: Math.floor(new Date().getTime() / 1000),
            expirationTime: expirationTime,
            salt: await genSalt(),
        }
        
        const addrs = extractAddrs(order)
        const uints = extractUints(order)

        const contract = loadContract(exchangeAddress)

        const hash = await contract.hashOrder_(addrs, uints,
            order.feeMethod, 
            order.side, 
            order.saleKind, 
            order.howToCall, 
            order.callData, 
            order.replacementPattern, 
            order.staticExtradata,
        )
        order.id = hash
        
        const sig = await Metamask.sign(account, hash)
        order.signature = sig
        
        const vrs = Metamask.sigToVRS(sig)
        const validResult = await contract.validateOrder_(addrs, uints, 
            order.feeMethod, 
            order.side, 
            order.saleKind, 
            order.howToCall, 
            order.callData, 
            order.replacementPattern, 
            order.staticExtradata,
            vrs.v, vrs.r, vrs.s)
        
        order.v = vrs.v
        order.r = vrs.r
        order.s = vrs.s

        return order
    },
    // 제안 수락
    acceptOffer: async (
        buyOrder, {
            exchangeAddress,
            feeRecipient,
            feeRatio,
            collectionAddress,
            tokenId,
            protocol,
            currencyAddress,
            price,
            expirationTime,
        }
    ) => {
        const account = await Metamask.getAccount()
        buyOrder = convertOrder(buyOrder)
        console.log(buyOrder)
        const sellOrder = {
            exchange: exchangeAddress,
            maker: account,
            taker: buyOrder.maker,
            makerRelayerFee: buyOrder.makerRelayerFee,
            takerRelayerFee: buyOrder.takerRelayerFee,
            makerProtocolFee: Define.ProtocolFee,
            takerProtocolFee: Define.ProtocolFee,
            feeRecipient: Define.NullAddress,
            feeMethod: buyOrder.feeMethod,
            side: Define.SideSell,
            saleKind: buyOrder.saleKind,
            target: collectionAddress,
            howToCall: buyOrder.howToCall,
            callData: "0x" + Define.CallFunction[protocol] + "000000000000000000000000" + account.replace('0x', '') + "0000000000000000000000000000000000000000000000000000000000000000" + bigIntToHex(tokenId),
            replacementPattern: Define.ReplacementPattern.Sell,
            staticTarget: Define.NullAddress,
            staticExtradata: Define.NullBytes,
            paymentToken: currencyAddress,
            basePrice: price,
            extra: Define.Extra,
            listingTime: buyOrder.listingTime,
            expirationTime: expirationTime,
            salt: await genSalt(),
        }

        const contract = loadContract(exchangeAddress)
        
        const addrs = [
            buyOrder.exchange, 
            buyOrder.maker, 
            buyOrder.taker, 
            buyOrder.feeRecipient, 
            buyOrder.target, 
            buyOrder.staticTarget, 
            buyOrder.paymentToken,
            sellOrder.exchange, 
            sellOrder.maker, 
            sellOrder.taker, 
            sellOrder.feeRecipient, 
            sellOrder.target, 
            sellOrder.staticTarget, 
            sellOrder.paymentToken,
        ]
        const uints = [
            buyOrder.makerRelayerFee, 
            buyOrder.takerRelayerFee, 
            buyOrder.makerProtocolFee, 
            buyOrder.takerProtocolFee, 
            buyOrder.basePrice, 
            buyOrder.extra, 
            buyOrder.listingTime,
            buyOrder.expirationTime,
            buyOrder.salt,
            sellOrder.makerRelayerFee, 
            sellOrder.takerRelayerFee, 
            sellOrder.makerProtocolFee, 
            sellOrder.takerProtocolFee, 
            sellOrder.basePrice, 
            sellOrder.extra, 
            sellOrder.listingTime,
            sellOrder.expirationTime,
            sellOrder.salt,
        ]
        const uints8 = [
            buyOrder.feeMethod,
            buyOrder.side,
            buyOrder.saleKind,
            buyOrder.howToCall,
            sellOrder.feeMethod,
            sellOrder.side,
            sellOrder.saleKind,
            sellOrder.howToCall,
        ]
    
        try {
            const tx = await contract.atomicMatch_(
                addrs, uints, uints8,
                buyOrder.callData, 
                sellOrder.callData, 
                buyOrder.replacementPattern, 
                sellOrder.replacementPattern, 
                buyOrder.staticExtradata, 
                sellOrder.staticExtradata,
                [buyOrder.v,buyOrder.v],
                [buyOrder.r,buyOrder.s,buyOrder.r,buyOrder.s,Define.NullByte32],
            )
            
            return tx.hash
        } catch (err) {
            console.log(err)
            return null
        }
    }
}

export default Exchange