import Axios from 'axios'
import * as Rest from  "store/rest/Rest"

const path = Rest.API_PATH + "search"

export function get(data, cancel){
    return Axios.request({
        method: 'get',
        url: path + "/assets" + Rest.toQueryString(data,{searchWord: ""}) ,
        cancelToken:cancel.token
    })
}


