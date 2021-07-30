import Axios from 'axios'
import * as Rest from  "store/rest/Rest"

export function account(address){
    return Axios.request({
        method: 'get',
        url: Rest.API_PATH + 'account/generalSetting?address=' + address
    })
}