import React from "react";
import Typography from "skeleton/component/text/Typography";
import { CardRow, CardAction, CardImage, CardContent }  from "style/cardStyle";
import { SvgPrice, SvgTime, SvgBasket, SvgStar, SvgStarFill }  from "asset/SvgImg";


function CardTypeRow({ size = 'full', data, action,  ...props }) {
    return (
        <CardRow size={size}
                 onClick={ e=> {
                    if (action == null) {return}
                    action()
                }}
        >
            <CardAction>
                <div className="image">
                    <CardImage src={data != null
                        ? data.art
                        : "https://ssl.pstatic.net/mimgnews/image/109/2021/08/24/0004461747_001_20210824112011683.jpg?type=w540" } alt="image" />
                </div>
                <i className="ico-favorite"><SvgStar /><SvgStarFill /></i>
                <CardContent>
                    <Typography variant="emphasis">
                        <SvgPrice />{data != null ? data.price : "0"}
                    </Typography>
                    <Typography variant="body2">
                        {data != null ? data.title : "title"}
                    </Typography>
                    <Typography variant="body1">
                        {data != null ? data.subTitle : "subtitle"}
                    </Typography>
                    <Typography variant="body1" name="basket">
                        <SvgBasket />{data != null ? data.contractedInfo : ""}
                    </Typography>
                    <Typography variant="body1" name="time">
                        <SvgTime />{data != null ? data.createdDate : ""}
                    </Typography>
                </CardContent>
            </CardAction>
        </CardRow>

    )
}

export default CardTypeRow;
