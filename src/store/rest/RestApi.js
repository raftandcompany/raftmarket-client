import AppDataProvider , * as DataProvider from "store/provider/DataProvider"
import * as Rest from "store/rest/Rest"
import * as Account from  "store/rest/api/Account"

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
                if( response["contents"] != null ) {
                    this.dataProvider.responseData( new DataProvider.DataResponse(request.type, response["contents"], request.isOption ,request.id) )
                } else if( response["items"] != null ){
                    this.dataProvider.responseData( new DataProvider.DataResponse(request.type, response["items"], request.isOption ,request.id) )
                } else {
                    this.dataProvider.responseError( new DataProvider.DataError(request.type, null, request.isOption ,request.id) )
                }
            })
            .catch((error) => {
                console.log(this.TAG, error)
                this.dataProvider.responseError( new DataProvider.NetworkError(request.type, error, request.isOption ,request.id) )
            })
    }

    getApi(request){
         switch (request.type) {
            case Rest.ApiType.account :
                return Account.account(request.params.adress)
            default : return null
        }
    }


}

const rest = new RestApi()
export default function AppRestApi() {
    return rest
}