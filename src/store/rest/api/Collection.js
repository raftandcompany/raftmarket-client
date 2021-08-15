import Axios from 'axios'
import * as Rest from  "store/rest/Rest"

const path = Rest.API_PATH + "collections"

export function get(data){
    return Axios.request({
        method: 'get',
        url: path + Rest.toQueryString(data,
            {
                chain : "ETHERIUM",
                address: "address1",
                page: 0,
                size: 10
            })
    })
}

export function getCollectionAddress(collectionAddress){
    return Axios.request({
        method: 'get',
        url: path + "/" + collectionAddress
    })
}




