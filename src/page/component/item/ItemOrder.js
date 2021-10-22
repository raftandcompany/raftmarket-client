import React from "react";
import { format } from "date-fns"
import OrderButton from "skeleton/component/button/BorderRadiusButton";
import Typography from "skeleton/component/text/Typography";
import {SvgPrice, SvgTime} from "asset/SvgImg";
import EllipseButton from "skeleton/component/button/EllipseButton";
import {Owner} from "skeleton/component/unit/Unit";

export class OrderData{
    constructor(data) {
        this.data = data
        this.date = new Date(data.created);
        this.expiration = new Date(data.expirationTime*1000);
        this.orderType = data.orderType
        this.title = data.orderType + " " + data.currency + " ( " +  data.basePrice + " )"
        this.subTitle = data.currency + " " + data.status
        this.price = data.basePrice
        this.createdDate = format(this.date, "MMMM do, yyyy");
        this.expireDate = format(this.expiration, "MMMM do, yyyy");
        console.log("OrderData", this.expiration)
        console.log("OrderData", this.expireDate)
    }
    /*
      "id": 1,
      "chain": "RINKEBY",
      "collectionAddress": "collectionAddress1",
      "assetId": "assetId1",
      "orderType": "LISTINGS",
      "status": "OPENED",
      "exchange": "exchange1",
      "maker": "address1",
      "makerRelayerFee": 0,
      "takerRelayerFee": 0,
      "feeRecipient": "feeRecipient1",
      "callData": "callData1",
      "basePrice": 1,
      "listingTime": 1111111,
      "expirationTime": 2222222,
      "salt": "salt1",
      "signature": "signature1",
      "created": "2016-09-27T17:13:40",
      "currency": "RINKEBY_ETHER"
    */
}

export function ItemListing({data, action}){
    return (
        <div className="market">
            <div className="price">
                <Typography variant="emphasis">
                    <SvgPrice />{data.price}<span className="text-sub">{data.price}</span>
                </Typography>
            </div>
            <div className="owner">
                <Owner
                    img="https://ssl.pstatic.net/mimgnews/image/109/2021/08/24/0004461747_001_20210824112011683.jpg?type=w540"
                    text="Artblockmaster" />
            </div>
            <Typography variant="body1" name="time"><SvgTime />{data.expireDate}</Typography>
            <EllipseButton children="buy" type="purple" height={40} fontSize={16} />
        </div>


    )
}

export function ItemOffer({data, action}){
    return (
        <OrderButton children={data.title}
                     type= "blue"
                     unactive={true}
                     fullSize={true} />
    )
}