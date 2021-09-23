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
import { Owner, Tab, Accordion } from "skeleton/component/unit/Unit";


import {Title} from "style/textStyle";
import {PageBg, StyledScrollWrap} from "style/layoutStyle";
import {StyledFullButtonWrap, StyledButtonWrap} from "style/roundButton";
import {StyledInputWrap} from "style/formStyle";
import { TitleWrap }  from "style/titleWrap";

import {SvgArrowRight, SvgArrowUp, SvgArrowDown, SvgList, SvgOffer} from "asset/SvgImg";
import Dialog from "skeleton/component/dialog/Dialog";
import { Favorite } from "../../skeleton/component/unit/Unit";

const data1 = [
    {
        type: 'row',
        name: 'Listing',
        count: 2,
        eth: 1.5,
        dollar: '$1100',
        text: 'Artblockmaster',
        img: 'https://shared-comic.pstatic.net/thumb/webtoon/748105/thumbnail/thumbnail_IMAG06_fa3bf10d-1b8f-40cd-a8eb-01caf9bbc3e4.jpg',
        expire: 0
    },
    {
        type: 'row',
        name: 'Offers',
        eth: 100,
        dollar: '$1100',
        text: 'ggg',
        img: 'https://shared-comic.pstatic.net/thumb/webtoon/748105/thumbnail/thumbnail_IMAG06_fa3bf10d-1b8f-40cd-a8eb-01caf9bbc3e4.jpg',
        expire: 4
    }
]
const data2 = [
    {
        label: 'Body',
        item: 'Blue Cat Skin',
        rarity: 'Bad (100%)'
    }
]

export default function PageSample({pageObj}){
    return (
        <PageBg>

            {/* nft detail */}
            <div style={{position:"relative"}}>
                <Util result={true} favorite={true} share={true} more={true} link={true} />
                <div className="detailbox">
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
            </div>


            <Title>Welcome, <br />Sign In</Title>

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


            <ListTitle title={<span>Top NFTs</span>} icon="King" more="See All Rankings" type="blue" />
            <StyledScrollWrap>
                <div className="list list-scroll">
                    <CardTypeRow size="medium" />
                    <CardTypeRow size="medium" />
                    <CardTypeRow size="medium" />
                    <CardTypeRow size="medium" />
                </div>
            </StyledScrollWrap>

            <ListTitle title={<span>Newly Minuted</span>} more="See More" />

            <div className="list list-collection">
                <CardTypeRow size="small" />
                <CardTypeRow size="small" />
                <CardTypeRow size="small" />
            </div>
            <div className="list">
                <CardTypeRow size="large" />
                <CardTypeRow size="large" />
            </div>

            <div className="list">
                <CardTypeCol />
            </div>

            <Category type="art" bg="https://ssl.pstatic.net/mimgnews/image/109/2021/08/24/0004461747_001_20210824112011683.jpg?type=w540" />

            {/* <Share name="facebook"/> */}

            
            <div style={{height:600}}>여백용</div>
        </PageBg>
    )
}
