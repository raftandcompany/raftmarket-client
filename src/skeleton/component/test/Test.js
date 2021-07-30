import React from "react";
import { observer } from "mobx-react"
import {makeAutoObservable, autorun, observable} from "mobx"
import DisplayName from "./DisplayName"
import AppDataProvider, * as DataProvider from "store/provider/DataProvider"

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

let me = new Person("jc kim")
let myCar = new Car("modelS")



function action (){
    me.changeName()
    myCar.changeModel()
    AppDataProvider().requestQ(new DataProvider.DataRequest(DataProvider.ApiType.account, {address:"address1"}))
}

