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
        url: path + "/search" + Rest.toQueryString(data,{page: 0, size: 10}) ,
        data: Rest.toData(data,
            {
                assetSearchType: "OWNER",
                nftCategory: "NEW",
                currency: "USD",
                minPrice: 0,
                maxPrice: 9999,
                status: "BUY_NOW",
                chain: "RINKEBY",
                collectionAddress: "collectionAddress1",
                address: "address1",
                mainCategoryId: 1
            }),
        cancelToken:cancel.token
    })
}


