import Axios from 'axios'
import * as Rest from  "store/rest/Rest"

const path = Rest.API_PATH + "history"

export function getTrading(data, cancel){
    return Axios.request({
        method: 'post',
        url: path + "/trading" + Rest.toQueryString(data,
            {
                page: 0,
                size: 10
            }),
        data: Rest.toData(data,
            {
                tradingType: "ACTIVITY",
                tradingHistoryEventType: "LISTINGS",
                collectionAddress: "collectionAddress1",
                chain: "RINKEBY",
                assetId: "assetId1",
                address: "address1"
            }),
        cancelToken:cancel.token
    })
}

export function getPrice(data, cancel){
    return Axios.request({
        method: 'get',
        url: path + "/price" + Rest.toQueryString(data,
            {
                assetId : "assetId1",
                timeRange : "LAST_7_DAYS",
                page: 0,
                size: 10
            }),
        cancelToken:cancel.token
    })
}




