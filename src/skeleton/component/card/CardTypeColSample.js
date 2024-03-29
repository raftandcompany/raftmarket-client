import React from "react";
import Typography from "skeleton/component/text/Typography";
import { Owner} from "skeleton/component/unit/Unit";
import { CardCol, CardAction, CardContent, UserImage }  from "style/cardStyle";
import { SvgPrice, SvgTime, SvgBasket, SvgCart, SvgArrowRight2, SvgList, SvgOffer, SvgTransfer }  from "asset/SvgImg";
import CardUser from "skeleton/component/card/CardUser";
import CardImage from "skeleton/component/card/CardImage";
import {v4 as uuidv4} from "uuid";
import MoreButton from "skeleton/component/button/MoreButton"
import * as Images from "asset/temp/index";

function CardTypeColSample({ size = 'full', data, action, more, ...props }) {
    const OwnerList = ({ owners }) =>
        <div className="owner">
            { owners.map( owner => <CardUser key={uuidv4().toString()} data = {owner}/> ) }
        </div>

    const OwnerListSample = () =>
        <div className="owner">
            <Owner 
                img={Images.Img2} 
                text="Artblockmaster" />
            <SvgArrowRight2 />
            <Owner 
                img={Images.Img3} 
                text="daniel70" />
        </div>
    const OwnerListSample2 = () =>
    <div className="owner">
        <Owner 
            img={Images.Img3} 
            text="Artblockmaster" />
        <SvgArrowRight2 />
        <Owner 
            img={Images.Img5} 
            text="daniel70" />
    </div>

    return (
        <div>
            <CardCol size={size}
                 onClick={ e=> {
                     if (action == null) {return}
                     action()
                 }}
                 className="card-col"
        >
            <CardAction>

                <CardImage src={data != null
                    ? (data.displayImage != null ? data.displayImage : data.art)
                    : Images.Img4} />
                <CardContent>
                    <Typography variant="body2" name="status list">
                        <span><SvgList /></span> {data != null ? (data.displayName != null ? data.displayName : data.title) : "List"}
                    </Typography>
                    <Typography variant="body2" >
                        {data != null ? (data.description != null ? data.description : data.subTitle) : "AlgoRhythms #701"}
                    </Typography>
                    {/*
                    <Typography variant="body2" name="status list">
                        <span><SvgList /></span>List
                    </Typography>
                    <Typography variant="body2" name="status offer">
                        <span><SvgOffer /></span>Offer
                    </Typography>
                    */}

                    <Typography variant="body2" name="status transfer">
                        <span><SvgTransfer /></span>{data != null ? data.contractedInfo : "Transfer"}
                    </Typography>

                    <Typography variant="emphasis">
                        <SvgPrice />{data != null ? data.price : "0.65"}
                        <Typography variant="span" name="bar"></Typography>
                        <Typography variant="span">
                            {data != null ? data.currency : "Et"}
                        </Typography>
                        <Typography variant="span" name="unit">
                            {data != null ? data.chain : "Qt"}
                        </Typography>
                    </Typography>
                </CardContent>
                {
                    data != null
                        ? <OwnerList owners={data.owners}/>
                        : <OwnerListSample/>
                }

            </CardAction>
        </CardCol>
        <CardCol size={size}
                 onClick={ e=> {
                     if (action == null) {return}
                     action()
                 }}
                 className="card-col"
        >
            <CardAction>

                <CardImage src={data != null
                    ? (data.displayImage != null ? data.displayImage : data.art)
                    : Images.Img3} />
                <CardContent>
                    <Typography variant="body2" name="status cart">
                        <span><SvgCart /></span> {data != null ? (data.displayName != null ? data.displayName : data.title) : "Sale"}
                    </Typography>
                    <Typography variant="body2" >
                        {data != null ? (data.description != null ? data.description : data.subTitle) : "Sale Description"}
                    </Typography>
                    {/*
                    <Typography variant="body2" name="status list">
                        <span><SvgList /></span>List
                    </Typography>
                    <Typography variant="body2" name="status offer">
                        <span><SvgOffer /></span>Offer
                    </Typography>
                    */}

                    <Typography variant="body2" name="status transfer">
                        <span><SvgTransfer /></span>{data != null ? data.contractedInfo : "Transfer"}
                    </Typography>

                    <Typography variant="emphasis">
                        <SvgPrice />{data != null ? data.price : "0"}
                        <Typography variant="span" name="bar"></Typography>
                        <Typography variant="span">
                            {data != null ? data.currency : "Et"}
                        </Typography>
                        <Typography variant="span" name="unit">
                            {data != null ? data.chain : "Qt"}
                        </Typography>
                    </Typography>
                </CardContent>
                {
                    data != null
                        ? <OwnerList owners={data.owners}/>
                        : <OwnerListSample2/>
                }

            </CardAction>
        </CardCol>
        <CardCol size={size}
                 onClick={ e=> {
                     if (action == null) {return}
                     action()
                 }}
                 className="card-col"
        >
            <CardAction>

                <CardImage src={data != null
                    ? (data.displayImage != null ? data.displayImage : data.art)
                    : Images.Img2} />
                <CardContent>
                    <Typography variant="body2" name="status offer">
                        <span><SvgOffer /></span> {data != null ? (data.displayName != null ? data.displayName : data.title) : "Offer"}
                    </Typography>
                    <Typography variant="body2" >
                        {data != null ? (data.description != null ? data.description : data.subTitle) : "Description"}
                    </Typography>
                    {/*
                    <Typography variant="body2" name="status list">
                        <span><SvgList /></span>List
                    </Typography>
                    <Typography variant="body2" name="status offer">
                        <span><SvgOffer /></span>Offer
                    </Typography>
                    */}

                    <Typography variant="body2" name="status transfer">
                        <span><SvgTransfer /></span>{data != null ? data.contractedInfo : "Transfer"}
                    </Typography>

                    <Typography variant="emphasis">
                        <SvgPrice />{data != null ? data.price : "0.98"}
                        <Typography variant="span" name="bar"></Typography>
                        <Typography variant="span">
                            {data != null ? data.currency : "Et"}
                        </Typography>
                        <Typography variant="span" name="unit">
                            {data != null ? data.chain : "Qt"}
                        </Typography>
                    </Typography>
                </CardContent>
                {
                    data != null
                        ? <OwnerList owners={data.owners}/>
                        : <OwnerListSample2/>
                }

            </CardAction>
        </CardCol>
        <CardCol size={size}
                 onClick={ e=> {
                     if (action == null) {return}
                     action()
                 }}
                 className="card-col"
        >
            <CardAction>

                <CardImage src={data != null
                    ? (data.displayImage != null ? data.displayImage : data.Img3)
                    : Images.Img5} />
                <CardContent>
                    <Typography variant="body2" name="status cart">
                        <span><SvgCart /></span> {data != null ? (data.displayName != null ? data.displayName : data.title) : "Sale"}
                    </Typography>
                    <Typography variant="body2" >
                        {data != null ? (data.description != null ? data.description : data.subTitle) : "Sale Description"}
                    </Typography>
                    {/*
                    <Typography variant="body2" name="status list">
                        <span><SvgList /></span>List
                    </Typography>
                    <Typography variant="body2" name="status offer">
                        <span><SvgOffer /></span>Offer
                    </Typography>
                    */}

                    <Typography variant="body2" name="status transfer">
                        <span><SvgTransfer /></span>{data != null ? data.contractedInfo : "Transfer"}
                    </Typography>

                    <Typography variant="emphasis">
                        <SvgPrice />{data != null ? data.price : "3.5"}
                        <Typography variant="span" name="bar"></Typography>
                        <Typography variant="span">
                            {data != null ? data.currency : "Et"}
                        </Typography>
                        <Typography variant="span" name="unit">
                            {data != null ? data.chain : "Qt"}
                        </Typography>
                    </Typography>
                </CardContent>
                {
                    data != null
                        ? <OwnerList owners={data.owners}/>
                        : <OwnerListSample/>
                }

            </CardAction>
        </CardCol>
        <CardCol size={size}
                 onClick={ e=> {
                     if (action == null) {return}
                     action()
                 }}
                 className="card-col"
        >
            <CardAction>

                <CardImage src={data != null
                    ? (data.displayImage != null ? data.displayImage : data.Img2)
                    : Images.Img1} />
                <CardContent>
                    <Typography variant="body2" name="status cart">
                        <span><SvgCart /></span> {data != null ? (data.displayName != null ? data.displayName : data.title) : "Sale"}
                    </Typography>
                    <Typography variant="body2" >
                        {data != null ? (data.description != null ? data.description : data.subTitle) : "Sale Description"}
                    </Typography>
                    {/*
                    <Typography variant="body2" name="status list">
                        <span><SvgList /></span>List
                    </Typography>
                    <Typography variant="body2" name="status offer">
                        <span><SvgOffer /></span>Offer
                    </Typography>
                    */}

                    <Typography variant="body2" name="status transfer">
                        <span><SvgTransfer /></span>{data != null ? data.contractedInfo : "Transfer"}
                    </Typography>

                    <Typography variant="emphasis">
                        <SvgPrice />{data != null ? data.price : "0"}
                        <Typography variant="span" name="bar"></Typography>
                        <Typography variant="span">
                            {data != null ? data.currency : "Et"}
                        </Typography>
                        <Typography variant="span" name="unit">
                            {data != null ? data.chain : "Qt"}
                        </Typography>
                    </Typography>
                </CardContent>
                {
                    data != null
                        ? <OwnerList owners={data.owners}/>
                        : <OwnerListSample/>
                }

            </CardAction>
        </CardCol>
        </div>
        
    )



}


export default CardTypeColSample;
