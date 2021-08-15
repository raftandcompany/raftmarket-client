import Axios from 'axios'
import * as Rest from  "store/rest/Rest"
const path = Rest.API_PATH + "account"
export function get(data, cancel){
    return Axios.request({
        method: 'get',
        url: path + "/generalSetting" + Rest.toQueryString(data,{address : ""}),
        cancelToken:cancel.token
    })
}

export function post(data, cancel){
    return Axios.request({
        method: 'post',
        url: path,
        data: Rest.toData(data, {address : ""}),
        cancelToken:cancel.token
    })
}

export function put(data, cancel){
    return Axios.request({
        method: 'put',
        url: path + "/generalSetting",
        data: Rest.toData(data, {address : ""}),
        cancelToken:cancel.token
    })
}


