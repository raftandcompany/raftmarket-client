import { makeAutoObservable } from "mobx"
import { v4 as uuidv4 } from 'uuid';


class DataProvider {
    constructor() {
        this.request = null
        this.response = null
        this.error = null
        this.user = null
        makeAutoObservable(this)
    }
    destory(){
    }

    requestQ(dataRequest){
        this.request = dataRequest
    }

    responseData(dataResponse){
        this.response = dataResponse
    }

    responseError(dataError){
        this.error = dataError
    }

}

export class DataRequest {
    constructor(type, params, id = null,  isOption = false) {
        this.id = id == null ? uuidv4() : id
        this.type = type
        this.params = params
        this.isOption = isOption
    }
}

export class DataResponse {
    constructor( type, data, isOption , id) {
        this.id = id
        this.type = type
        this.data = data
        this.isOption = isOption
    }
}

export class DataError {
    constructor(type, err, isOption , id) {
        this.id = id
        this.type = type
        this.err = err
        this.isOption = isOption
    }
}

export class DataModel {
    constructor() {
    }
    setData(json) {
        Object.keys(json).forEach((key) => {
            if ( this[key] !== undefined ){
                this[key] = json[key]
            }
        })
    }
}

export class NetworkError {
    constructor(type, err, isOption, id) {
        this.id = id
        this.type = type
        this.err = err
        this.isOption = isOption
    }
}

const dataProvider = new DataProvider()
export default function AppDataProvider() {
   return dataProvider
}