import React from "react";
import { format } from "date-fns"
import CardTypeRow from "skeleton/component/card/CardTypeRow";
import CardTypeCol from "skeleton/component/card/CardTypeCol";
import * as Metamask from "../../../store/manager/metamask/Metamask";

export class AssetData{
    constructor(data) {
        this.data = null
        this.art = ""
        this.date = null;
        this.title = ""
        this.subTitle = ""
        this.price = ""
        this.dollar = ""
        this.currency = ""
        this.chain = ""
        this.contractedInfo = ""
        this.createdDate = ""
        this.owners = Array()
        this.displayImage = ""
        this.displayName = ""
        this.description = ""
        this.externalLink = null
        this.properties = []
        if (data != null) {
            this.setData(data)
        }

    }
    setData(data){
        this.data = data
        this.art = "https://d15dy25hbh766o.cloudfront.net/asset/0x000004f5a30d9394316782ac3ee971546bcaa682/1633789026_2.jpg"
        this.date = new Date(data.created);
        this.title = data.collectionName == null ? "no information" : data.collectionName
        this.dollar = ( this.price * 1024 ) + "$"
        this.currency = data.currency
        this.price = Number(data.price) / Metamask.ExchangeKey.coinUnit
        this.chain = data.chain
        this.contractedInfo = this.title + " | " + data.chain;
        this.createdDate = format(this.date, "MMMM do, yyyy");
        if (data.owners!= null) {
            let count = data.owners.length
            this.owners = data.owners.map((owner, index) => {
                return new OwnerData(owner, index === (count-1))
            })
            console.log("this.owners",this.owners)
        }

        if (data.meta!= null) {
            this.displayImage = data.meta.contentsUrl
            this.displayName = data.meta.name
            this.description = data.meta.description
            this.externalLink = data.meta.externalLink
            this.properties = data.properties
        }
    }
    /*
        "chain": "RINKEBY",
        "collectionAddress": "0x000ce7170b9eef0c5f0eff241ba62f34c9294e8a",
        "assetId": "asset1",
        "totalQuantity": 1,
        "createTxId": "1",
        "created": "2021-07-19T05:45:23",
        "currency": "ETHER",
        "price": 1,
        "collectionName": "https://gutterrats.s3.us-east-2.amazonaws.com/j/1",
        "owners": []
        */

    /*
    "meta": {
        "id": 1,
        "name": "metaName",
        "description": "metaDesc",
        "externalLink": "metaExtern",
        "properties": [
            {
                "type": "type1",
                "name": "name1"
            }
        ]
    }
    */
}

export class OwnerData{
    constructor(data, isCurrent) {
        this.data = data
        this.profileImg = "https://ssl.pstatic.net/mimgnews/image/109/2021/08/24/0004461747_001_20210824112011683.jpg?type=w540"
        this.date = new Date(data.created);
        this.title = data.name
        this.email = data.email
        this.isCurrent = isCurrent
        this.address = data.address


    }
    /*
      address: "0x2dd4836044c4f09a20ff307a2bde10172095fb1d"
        comment: "jjp"
        created: "2021-10-20T08:46:30"
        email: "sqq"
        lastModified: "2021-10-20T08:46:30"
        name: "김정럴"
        quantity: 1
    */
}

export default function ItemAsset({size, data, action}){
    return (
        <CardTypeRow size = {size}
                     data = {data}
                     action = {action}
                     />
    )
}

export function ItemAssetArt({data, action, more}){
    return (
        <CardTypeCol data = {data}
                     action = {action}
                     more = {more}
        />
    )
}
