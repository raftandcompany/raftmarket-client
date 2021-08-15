import AppDataProvider , * as DataProvider from "store/provider/DataProvider"
import * as Rest from "store/rest/Rest"
import * as Account from  "store/rest/api/Account"
import * as Asset from  "store/rest/api/Asset"
import * as History from  "store/rest/api/History"
import * as Listing from  "store/rest/api/Listing"
import * as Offer from  "store/rest/api/Offer"
import * as Collection from  "store/rest/api/Collection"
class RestApi {
    constructor() {
        this.TAG = "RestApi"
        this.dataProvider = AppDataProvider()
    }

    load(request){
        console.log(this.TAG, request)
        this.getApi(request)
            .then( (response) => {
                console.log(this.TAG, response)
                if( response["status"] != null ) {
                    let ststus =  response.status
                    console.log(this.TAG, ststus)
                    if( response["data"] != null ) {
                        let data =  response.data
                        if (data["contents"] != null) {
                            this.dataProvider.responseData(new DataProvider.DataResponse(request.type, data["contents"], request.isOption, request.id))
                        } else if (data["items"] != null) {
                            this.dataProvider.responseData(new DataProvider.DataResponse(request.type, data["items"], request.isOption, request.id))
                        } else {
                            this.dataProvider.responseData(new DataProvider.DataResponse(request.type, null, request.isOption, request.id))
                        }
                    } else {
                        this.dataProvider.responseData(new DataProvider.DataResponse(request.type, null, request.isOption, request.id))
                    }
                } else {
                    let error = {
                        message : "status not found"
                    }
                    console.log(this.TAG, error)
                    this.dataProvider.responseError( new DataProvider.NetworkError(request.type, {}, request.isOption ,request.id) )
                }
            })
            .catch((error) => {
                console.log(this.TAG, error)
                this.dataProvider.responseError( new DataProvider.NetworkError(request.type, error, request.isOption ,request.id) )
            })
    }

    getApi(request){
        switch (request.type) {
            case Rest.ApiType.getAccount :
                return Account.get(request.params)
            case Rest.ApiType.putAccount :
                return Account.put(request.params)
            case Rest.ApiType.postAccount :
                return Account.post(request.params)
            case Rest.ApiType.getAsset :
                return Asset.get(request.params)
            case Rest.ApiType.postAsset :
                return Asset.post(request.params)
            case Rest.ApiType.getHistoryTrading :
                return History.getTrading(request.params)
            case Rest.ApiType.getHistoryPrice :
                return History.getPrice(request.params)
            case Rest.ApiType.getListing :
                return Listing.get(request.params)
            case Rest.ApiType.getOffer :
                return Offer.get(request.params)
            case Rest.ApiType.getCollection :
                return Collection.get(request.params)
            case Rest.ApiType.getCollectionAddress :
                return Collection.getCollectionAddress(request.params)
            default : return null
        }
    }
}

const rest = new RestApi()
export default function AppRestApi() {
    return rest
}