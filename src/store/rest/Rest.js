export const API_KEY = 'ironright'
export const API_PATH = "http://dev.api.raftmarket.net/v1/"
const TAG = "Rest"


export const ErrorCode = Object.freeze ({
    DBError : '901',
    DuplicatedKey : '902',
    UndefinedKey : '903',
    InvalidDataType : '904',
    UnauthorizedApiKey : '905',
    UnauthorizedAccessToken : '906',
    ValidationUserId : '907',
    ValidationLoginToken : '908',
    ValidationServerKey : '909',
    UnregisteredData : '910'
})


export const ApiType = Object.freeze ({
    postAccount : "postAccount",
    getAccount : "getAccount",
    putAccount : "putAccount",


    getAsset : "getAsset",
    getAssetById : "getAssetById",
    putAsset : "putAsset",
    getAssetSearch : "gettAssetSearch",

    getCollection : "getCollection",
    getCollectionById : "getCollectionById",

    getHistoryTrading : "getHistoryTrading",
    getHistoryPrice : "getHistoryPrice",

    getListings : "getListings",
    getOffers : "getOffers",
    postListing : "postListing",
    postOffer : "postOffer"
})







export function toQueryString(data, model, isFirst = true){
    let query = ""
    let first = isFirst
    for (const [key, value] of Object.entries(model)) {
        //console.log(TAG, "key : " + key + " value : " + value)
        if (data[key] !== undefined) {
            model[key] = data[key]
        }
        //console.log(TAG, key + " : " + model[key])
        if (first) {
            query += "?" + key + "=" + model[key]
            first = false
        } else {
            query += "&" + key + "=" + model[key]
        }
    }
    return query
}

export function toData(data, model){
    for (const [key, value] of Object.entries(model)) {
        //console.log(TAG, "key : " + key + " value : " + value)
        if (data[key] !== undefined) {
            model[key] = data[key]
        }
        //console.log(TAG, key+ " : " + model[key])
    }
    return model
}

export function toFormData(data, model){
    for (const [key, value] of Object.entries(model)) {
        //console.log(TAG, "key : " + key + " value : " + value)
        if (data[key] !== undefined) {
            model[key] = data[key]
        }
        //console.log(TAG, key+ " : " + model[key])
    }
    return model
}


