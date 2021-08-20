import React from "react";
import Button1 from "skeleton/component/button/EllipseButton"
import Button2 from "skeleton/component/button/BorderRadiusButton"
import Button3 from "skeleton/component/button/RoundButton"
import ListTitle from "skeleton/component/title/ListTitle";
import InputText from "skeleton/component/input/InputText";
import InputLabel from "skeleton/component/input/InputLabel";
import MoreButton from "skeleton/component/button/MoreButton"
import SearchBox from "skeleton/component/search/SearchBox"

import {Title} from "style/textStyle";
import {PageBg, StyledScrollWrap} from "style/layoutStyle";
import {StyledFullButtonWrap, StyledButtonWrap} from "style/roundButton";
import {StyledInputWrap} from "style/formStyle";
import { TitleWrap }  from "style/titleWrap";


import Dialog from "skeleton/component/dialog/Dialog";

export default function PageSample({pageObj}){
    return (
        <PageBg>
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


            <ListTitle children1={<span>Top NFTs</span>} icon="King" children2="See All Rankings" type="blue" />

            <ListTitle children1={<span>Newly Minuted</span>} children2="See More" />

            <div style={{height:600}}></div>
        </PageBg>
    )
}
