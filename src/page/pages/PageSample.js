import React from "react";
import Button1 from "skeleton/component/button/EllipseButton"
import Button2 from "skeleton/component/button/BorderRadiusButton"
import Button3 from "skeleton/component/button/RoundButton"
import ListTitle from "skeleton/component/title/ListTitle";
import InputText from "skeleton/component/input/InputText";
import InputLabel from "skeleton/component/input/InputLabel";
import MoreButton from "skeleton/component/button/MoreButton";
import SearchBox from "skeleton/component/search/SearchBox";
import CardTypeRow from "skeleton/component/card/CardTypeRow";
import CardTypeCol from "skeleton/component/card/CardTypeCol";
import CardUser from "skeleton/component/card/CardUser";
import CardImage from "skeleton/component/card/CardImage";
import Category from "skeleton/component/card/Category";
import Typography from "skeleton/component/text/Typography";

//import Share from "skeleton/component/unit/Share";
import Util from "skeleton/component/unit/Util";
import { Owner, Tab, Accordion, Accordion2 } from "skeleton/component/unit/Unit";


import {Title} from "style/textStyle";
import {PageBg, StyledScrollWrap} from "style/layoutStyle";
import {StyledFullButtonWrap, StyledButtonWrap} from "style/roundButton";
import {StyledInputWrap} from "style/formStyle";
import { TitleWrap } from "style/titleWrap";

import {SvgArrowRight, SvgPrice, SvgArrowDown2} from "asset/SvgImg";
import Dialog from "skeleton/component/dialog/Dialog";
import { Favorite } from "../../skeleton/component/unit/Unit";
import SvgLoading from "asset/SvgLoading.svg";



import * as Images from "asset/temp/index";


const data1 = [
    {
        status: 'show',
        type: 'row',
        name: 'November 7, 2021',
        items: [
            {
                eth: 1.5,
                dollar: '$1100',
                text: 'Artblockmaster',
                img: 'https://shared-comic.pstatic.net/thumb/webtoon/748105/thumbnail/thumbnail_IMAG06_fa3bf10d-1b8f-40cd-a8eb-01caf9bbc3e4.jpg',
                expire: 0
            },
            {
                eth: 1.5,
                dollar: '$1100',
                text: 'Artblockmaster',
                img: 'https://shared-comic.pstatic.net/thumb/webtoon/748105/thumbnail/thumbnail_IMAG06_fa3bf10d-1b8f-40cd-a8eb-01caf9bbc3e4.jpg',
                expire: 5
            }
        ]
    },
    {
        type: 'row',
        name: 'October 30, 2021',
        items: [
            {
                eth: 1.5,
                dollar: '$1100',
                text: 'Artblockmaster',
                img: 'https://shared-comic.pstatic.net/thumb/webtoon/748105/thumbnail/thumbnail_IMAG06_fa3bf10d-1b8f-40cd-a8eb-01caf9bbc3e4.jpg',
                expire: 0
            }
        ]
    },
    {
        type: 'row',
        name: 'October 19, 2021',
        items: [
            {
                eth: 1.5,
                dollar: '$1100',
                text: 'Artblockmaster',
                img: 'https://shared-comic.pstatic.net/thumb/webtoon/748105/thumbnail/thumbnail_IMAG06_fa3bf10d-1b8f-40cd-a8eb-01caf9bbc3e4.jpg',
                expire: 0
            }
        ]
    }
]
const data2 = [
    {
        name: 'Properties',
        items: [
            {
                label: 'Body',
                item: 'Blue Cat Skin',
                rarity: 'Bad (100%)'
            },
            {
                label: 'Body',
                item: 'Blue Cat Skin',
                rarity: 'Bad (100%)'
            }
        ]
    },
    {
        name: 'details',
        items: [
            {
                label: 'Body',
                item: 'Blue Cat Skin',
                rarity: 'Bad (100%)'
            }
        ]
    }
]

function Loading() {
	return (
		<div className="loading">
            <div className="loading-inner">
                <img src={SvgLoading} alt="loading.." />
                <p>
                    loading...
                </p>
            </div>
        </div>
	)
}

export default function PageSample({pageObj}){
    return (
        <PageBg className="page-history" >

            {/* {Loading()} */}
            <div style={{position:"relative"}}>
                <Util result={false} />
                {/* <div className="detailbox">
                    <Title>Pink Cat #123</Title>
                    <div className="owner">
                        <Owner 
                            img="https://ssl.pstatic.net/mimgnews/image/109/2021/08/24/0004461747_001_20210824112011683.jpg?type=w540" 
                            text="Artblockmaster" 
                            type="owner" />
                    </div>
                    <CardImage src="https://shared-comic.pstatic.net/thumb/webtoon/748105/thumbnail/thumbnail_IMAG06_fa3bf10d-1b8f-40cd-a8eb-01caf9bbc3e4.jpg" />
                </div>
                <div className="tab">
                    <Tab
                        title = "Market"
                        isSelectd = {true}
                        action = {1}
                    />
                    <Tab
                        title = "About"
                        isSelectd = {false}
                        action = {1}
                    />
                </div>
                <div className="tab-content">
                    <div className="title-history">
                        <StyledFullButtonWrap>
                            <Button2 children={<span>View History <span className="text-sub">35 sec ago</span><SvgArrowRight /></span>} fullSize={true} />
                        </StyledFullButtonWrap>
                    </div>
                    <Accordion data={data1} />
                </div>
                <div className="tab-content">
                    <Accordion data={data2} />
                </div>
                <div className="current-price">
                    <Typography variant="body1">Current Price</Typography>
                    <div className="price">
                        <Typography variant="emphasis">
                            <SvgPrice />1.5<span className="text-sub">($ 1907,02)</span>
                        </Typography>
                    </div>
                    <Button1 children="BUY NOW" type="purple" height={52} fontSize={16} />
                </div> */}

                <Typography variant="h3" name="title-center" children="History" />

                <StyledButtonWrap className="label-button">
                    <Typography variant="emphasis" name="select-time" children="Price History" />
                    <Button2 children={<span>Time Scale<SvgArrowDown2 /></span>} height="40" radius="8" grow={1} />
                </StyledButtonWrap>

                <div className="chart-box" style={{height:"20px"}}>
                </div>
                <div className="infobox">
                    <ul>
                        <li>
                            <Typography variant="span" name="text-pink" children="Hightest Price" />
                            <Typography variant="emphasis" name="number">
                                1.2 ETH
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="span" name="text-blue" children="Lowest Price" />
                            <Typography variant="emphasis" name="number">
                                0.5 ETH
                            </Typography>
                        </li>
                    </ul>
                </div>

                <div className="infobox">
                    <ul>
                        <li>
                            <Typography variant="span" name="" children="Avg. price" />
                            <Typography variant="emphasis" name="number">
                            0.7247
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="span" name="" children="Avg. volume" />
                            <Typography variant="emphasis" name="number">
                            3,193.7117
                            </Typography>
                        </li>
                    </ul>
                </div>
            </div>


            {/* <Title>Welcome, <br />Sign In</Title>

            <StyledInputWrap>
                <InputLabel children="mail" />
                <InputText placeHolder="ex) marketplace@gmail.com" height={48} fontSize={14} />
            </StyledInputWrap>

            <StyledInputWrap>
                <InputLabel children="password" />
                <InputText placeHolder="8-12 letters and numbers" height={48} fontSize={14} type="password" />
            </StyledInputWrap>

            <StyledInputWrap>
                <InputLabel children="password" valid={false} />
                <InputText placeHolder="8-12 letters and numbers" height={48} fontSize={14} type="password" valid={false} />
            </StyledInputWrap>

            <StyledInputWrap>
                <InputLabel children="Nickname" />
                <InputText placeHolder="disabled inputs" disabled={true} height={48} fontSize={14}  />
            </StyledInputWrap> 

            <TitleWrap>
                <MoreButton href="www.naver.com">
                    Forgot Password?
                </MoreButton>
            </TitleWrap>

            <StyledFullButtonWrap>
                <Button2 children="Log In" type="blue" unactive={true} fullSize={true} />
                <Button2 children="Log In" type="blue" fullSize={true} />
            </StyledFullButtonWrap>

            <StyledFullButtonWrap>
                <Button2 children="active button" fullSize={true} border={true} />
            </StyledFullButtonWrap>

            <StyledFullButtonWrap>
                <Button2 children="Sign Up" type="purple" unactive={true} fullSize={true} />
                <Button2 children="Sign Up" type="purple" fullSize={true} />
            </StyledFullButtonWrap>


            <Dialog isOpen={true} message={`We can’t find any account.
                Try again!`} />

            <StyledButtonWrap>
                <Button2 children="Not Now" grow={1} />
                <Button2 children="I Agree" type="blue" grow={2} />
            </StyledButtonWrap>

            <div style={{marginTop:30}}>
                <Button1 children="default button" height={52} fontSize={16} />
                <Button1 children="active button" type="purple" height={52} fontSize={16} />
                <Button1 children="reset button" type="white" height={52} fontSize={16} />
                <Button1 children="apply button" type="blue" height={44} fontSize={14} />
                <Button1 children="disabled button" disabled={true} height={40} fontSize={12} />
            </div>

            <div style={{marginTop:'30px'}}>
                <Button2 children="default button" radius={6} />
                <Button2 children="active button" type="purple" height={44} fontSize={14} radius={4}/>
                <Button2 children="disabled button" disabled={true} height={36} fontSize={12} radius={4} />
            </div>

            <SearchBox new={true} />
           
            <SearchBox result={true} />
             

            <StyledScrollWrap>
                <div>
                    <Button3 as={"a"} href={"/"} icon="New" type="purple" />
                    <Button3 icon="Art" type="blue" />
                    <Button3 icon="Music" type="purple" />
                    <Button3 icon="Sports" type="blue" />
                    <Button3 icon="Virtual Reality" type="purple" />
                    <Button3 icon="Trading Card" type="blue" />
                    <Button3 icon="Collective Items" type="purple" />
                    <Button3 icon="Domain Name" type="blue" />
                </div>
            </StyledScrollWrap>
            */}

            {/* <ListTitle title={<span>Top NFTs</span>} icon="King" more="See All Rankings" type="blue" />
            <StyledScrollWrap>
                <div className="list list-scroll">
                    <CardTypeRow size="medium" />
                    <CardTypeRow size="medium" />
                    <CardTypeRow size="medium" />
                    <CardTypeRow size="medium" />
                </div>
            </StyledScrollWrap> */}

            <ListTitle title={<span>Trading History</span>} />

            {/* <div className="list list-collection">
                <CardTypeRow size="small" />
                <CardTypeRow size="small" />
                <CardTypeRow size="small" />
            </div>
            <div className="list">
                <CardTypeRow size="large" />
                <CardTypeRow size="large" />
            </div> */}

            
        <Accordion2 data={data1} />           

            {/* <Category type="art" bg="https://ssl.pstatic.net/mimgnews/image/109/2021/08/24/0004461747_001_20210824112011683.jpg?type=w540" /> */}


            {/* <Share name="facebook"/> */}
        </PageBg>
    )
}
