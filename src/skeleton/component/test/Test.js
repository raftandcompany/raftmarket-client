import React from "react";
import { observer } from "mobx-react"
import {autorun, makeAutoObservable, runInAction} from "mobx"
import DisplayName from "./DisplayName"
import AppDataProvider, * as DataProvider from "store/provider/DataProvider"
import * as Rest from "store/rest/Rest"


const TAG = "Test"

const PersonNameDisplayer = observer(({ person }) => <DisplayName name={person.name} />)
const CarNameDisplayer = observer(({ car }) => <DisplayName name={car.model} />)
const ManufacturerNameDisplayer = observer(({ car }) => <DisplayName name={car.manufacturer.name} />)


class Person {
    constructor(name) {
        this.name = name
        makeAutoObservable(this)
    }
    changeName(){
        this.name = Math.floor(Math.random() * 10000)
    }
}

class Car {
    constructor(model) {
        this.model = model
        this.manufacturer = me
        makeAutoObservable(this)


    }
    changeModel(){
        this.model = Math.floor(Math.random() * 10000)
    }
}

export default function Test({pageObj}){
    return (
        <div>
            <button onClick={() =>{action()}}>action </button>
            <div>{pageObj.id}</div>
            <DisplayName name={me.name} />
            { <PersonNameDisplayer person = {me}/> }
            { <CarNameDisplayer car = {myCar}/> }
            { <ManufacturerNameDisplayer car ={myCar}/> }
        </div>
    )
}

let dataProvider = AppDataProvider()
let me = new Person("jc kim")
let myCar = new Car("modelS")


function action (){
    me.changeName()
    myCar.changeModel()
    dataProvider.requestQ(new DataProvider.DataRequest(Rest.ApiType.getAccount, {address:"address1"}))
}

autorun(() => {
    let response = dataProvider.response
    if (response != null){
        if (dataProvider.response.type === Rest.ApiType.getAccount){
            console.log(TAG + "response", response)
        }
    }
})

