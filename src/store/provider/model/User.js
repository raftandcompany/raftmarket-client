import { makeAutoObservable } from "mobx"

export default class User {
    constructor() {
        this.adress = null
        this.name = null
        this.email = null
        this.bio = null
        makeAutoObservable(this)
    }

    setData(date, address){
        this.adress = address
        this.name = date.userName
        this.bio = date.bio
        this.email = date.emailAddress
        return this
    }

    destory(){
    }
}

