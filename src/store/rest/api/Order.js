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





