import Axios from 'axios'
import * as Rest from  "store/rest/Rest"

const path = Rest.API_PATH + "collections"

export function get(data, cancel){
    return Axios.request({
        method: 'get',
        url: path + Rest.toQueryString(data,
            {
                chain : "RINKEBY",
                address: "address1",
                page: 0,
                size: 10
            }),
        cancelToken:cancel.token
    })
}

export function getCollectionAddress(collectionAddress, cancel){
    return Axios.request({
        method: 'get',
        url: path + "/" + collectionAddress,
        cancelToken:cancel.token
    })
}




