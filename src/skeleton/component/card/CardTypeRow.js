import React from "react";
import Typography from "skeleton/component/text/Typography";
import { Favorite } from "skeleton/component/unit/Unit";
import { CardRow, CardAction, CardContent }  from "style/cardStyle";
import { SvgPrice, SvgTime, SvgBasket }  from "asset/SvgImg";
import CardImage from "skeleton/component/card/CardImage";


function CardTypeRow({ size = 'full', data, action,  ...props }) {
    return (
        <CardRow size={size}
                 onClick={ e=> {
                    if (action == null) {return}
                    action()
                }}
                className="card-row"
        >
            <CardAction>
                <CardImage src={data != null
                    ? data.art
                    : "https://ssl.pstatic.net/mimgnews/image/109/2021/08/24/0004461747_001_20210824112011683.jpg?type=w540"} />
                {/* <div className="image">
                    <CardImage src={data != null
                        ? data.art
                        : "https://ssl.pstatic.net/mimgnews/image/109/2021/08/24/0004461747_001_20210824112011683.jpg?type=w540" } alt="image" />
                </div> */}
                <CardContent>
                    <Typography variant="emphasis">
                        <SvgPrice />{data != null ? data.price : "0"}
                    </Typography>
                    <Typography variant="body2">
                        {data != null ? data.displayName : "title"}
                    </Typography>
                    <Typography variant="body1">
                        {data != null ? data.description : "subtitle"}
                    </Typography>
                    <Typography variant="body1" name="basket">
                        <SvgBasket />{data != null ? data.contractedInfo : ""}
                    </Typography>
                    <Typography variant="body1" name="time">
                        <SvgTime />{data != null ? data.createdDate : ""}
                    </Typography>
                </CardContent>
            </CardAction>
            <Favorite status={props.status} />
        </CardRow>

    )
}

export default CardTypeRow;
