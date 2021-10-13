import { makeAutoObservable } from "mobx"

export default class User {
    constructor() {
        this.adress = null
        this.name = null
        this.email = null
        this.bio = null
        makeAutoObservable(this)
    }

    isJoin(){
        return !(this.adress === null || this.adress === undefined)

    }
    needProfile(){
        return this.name === null || this.name === undefined || this.name === ""

    }

    setData(date, address){
        this.adress = date.address
        this.name = date.name
        this.bio = date.bio
        this.email = date.email
        return this
    }

    destory(){
    }
}

