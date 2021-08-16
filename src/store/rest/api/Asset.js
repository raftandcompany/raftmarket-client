import Axios from 'axios'
import * as Rest from  "store/rest/Rest"

const path = Rest.API_PATH + "assets"
export function get(assetId, cancel){
    return Axios.request({
        method: 'get',
        url: path + "/" + assetId,
        cancelToken:cancel.token
    })
}


export function post(data, cancel){
    return Axios.request({
        method: 'post',
        url: path,
        data: Rest.toData(data,
            {
                nftCategory: "NEW",
                currency: "USD",
                minPrice: 0,
                maxPrice: 100,
                status: "BUY_NOW",
                chain: "ETHERIUM",
                collectionAddress: "collectionAddress1"
            }),
        cancelToken:cancel.token
    })
}


