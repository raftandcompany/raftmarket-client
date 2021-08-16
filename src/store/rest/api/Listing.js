import Axios from 'axios'
import * as Rest from  "store/rest/Rest"

const path = Rest.API_PATH + "listing"

export function get(data, cancel){
    return Axios.request({
        method: 'get',
        url: path + Rest.toQueryString(data,
            {
                assetId : "assetId1",
                page: 0,
                size: 10
            }),
        cancelToken:cancel.token
    })
}




