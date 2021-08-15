import Axios from 'axios'
import * as Rest from  "store/rest/Rest"
const path = Rest.API_PATH + "account"
export function get(data){
    return Axios.request({
        method: 'get',
        url: path + "/generalSetting" + Rest.toQueryString(data,{address : ""})
    })
}

export function post(data){
    return Axios.request({
        method: 'post',
        url: path,
        data: Rest.toData(data, {address : ""})
    })
}

export function put(data){
    return Axios.request({
        method: 'put',
        url: path + "/generalSetting",
        data: Rest.toData(data, {address : ""})
    })
}


