import Axios from 'axios'
import * as Rest from  "store/rest/Rest"

const path = Rest.API_PATH + "assets"

export const SearchType = Object.freeze ({
    Owner : "OWNER",
    MultipleCondition : "MULTIPLE_CONDITION",
    MainItem: "MAIN_ITEM"
})

export function get(assetId, cancel){
    return Axios.request({
        method: 'get',
        url: path + "/" + assetId ,
        cancelToken:cancel.token
    })
}

export function getById(data, cancel){
    return Axios.request({
        method: 'get',
        url: path + "/" + data.assetId + Rest.toQueryString(data,{chain: "", collectionAddress: ""}) ,
        cancelToken:cancel.token
    })
}

export function put(data, cancel){
    return Axios.request({
        method: 'put',
        url: path + "/" + data.assetId + Rest.toQueryString(data,{chain: "", collectionAddress: ""}) ,
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: Rest.toData(data,
            {
                contents: null,
                name: null,
                externalLink: null,
                description: null,
                //properties JSON Array string
            }),
        cancelToken:cancel.token
    })
}


export function getSearch(data, cancel){
    return Axios.request({
        method: 'post',
        url: path + "/search" + Rest.toQueryString(data,{page: 0, size: 10}) ,
        data: Rest.toData(data,
            {
                searchType: SearchType.MultipleCondition, //OWNER, MULTIPLE_CONDITION, MAIN_ITEM
                collectionCategory: "", //
                currency: "RINKEBY_ETHER",
                minPrice: 0,
                maxPrice: 9999,
                status: "", //BUY_NOW, ON_AUCTION, NEW_RELEASE, RECEIEVED_OFFERS
                chain: "RINKEBY", //RINKEBY, ETHEREUM, POLYGON, KLAYTN
                collectionAddress: "",
                address: "",
                mainCategoryId: 1
            }),
        cancelToken:cancel.token
    })
}


