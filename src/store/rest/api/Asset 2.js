import Axios from 'axios'
import * as Rest from  "store/rest/Rest"

const path = Rest.API_PATH + "assets"
export function get(assetId){
    return Axios.request({
        method: 'get',
        url: path + "/" + assetId
    })
}


export function post(data){
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
            })
    })
}


