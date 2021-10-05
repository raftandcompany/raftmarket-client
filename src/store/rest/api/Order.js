import Axios from 'axios'
import * as Rest from  "store/rest/Rest"

const path = Rest.API_PATH + "orders"
export const OrderType = Object.freeze ({
    Listing : "LISTINGS",
    Offers : "OFFERS"
})

export function getListings(data, cancel){
    data.orderType = OrderType.Listing
    return get(data, cancel)
}
export function getOffers(data, cancel){
    data.orderType = OrderType.Offers
    return get(data, cancel)
}
function get(data, cancel){
    return Axios.request({
        method: 'post',
        url: path + "/search",
        data: Rest.toData(data,
            {
                orderType: "LISTINGS",
                searchId: "ASSET",
                chain: "RINKEBY",
                collectionAddress: "0x001e4a130e9008f0a0bae16eb5a766e4371ccc1b",
                assetId: "1",
                address: "address1"
            }),
        cancelToken:cancel.token
    })
}
export function postListing(data, cancel){
    data.orderType = OrderType.Listing
    return post(data, cancel)
}
export function postOffer(data, cancel){
    data.orderType = OrderType.Offers
    return post(data, cancel)
}
function post(data, cancel){
    return Axios.request({
        method: 'post',
        url: path,
        data: Rest.toData(data,
            {
                id: "100",
                chain: "RINKEBY",
                collectionAddress: "0x001e4a130e9008f0a0bae16eb5a766e4371ccc1b",
                assetId: "2",
                orderType: "LISTINGS",
                status: "OPENED",
                exchange: "exchange1",
                maker: "address1",
                makerRelayerFee: 0,
                takerRelayerFee: 0,
                feeRecipient: "feeRecipient1",
                callData: "callData1",
                basePrice: 1,
                listingTime: 1111111,
                expirationTime: 2222222,
                salt: "salt1",
                signature: "signature1",
                currency: "RINKEBY_ETHER"
            }),
        cancelToken:cancel.token
    })
}





