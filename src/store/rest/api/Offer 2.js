import Axios from 'axios'
import * as Rest from  "store/rest/Rest"

const path = Rest.API_PATH + "offers"

export function get(data){
    return Axios.request({
        method: 'post',
        url: path + Rest.toQueryString(data,
            {
                page: 0,
                size: 10
            }),
        data: Rest.toData(data,
            {
                offerType: "ACCOUNT",
                assetId: "assetId1",
                address: "address1"
            })
    })
}




