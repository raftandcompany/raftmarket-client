import React from "react";
import Button1 from "skeleton/component/button/EllipseButton"
import Button2 from "skeleton/component/button/BorderRadiusButton"
import Button3 from "skeleton/component/button/RoundButton"
import {Title} from "style/textStyle";
import {PageBg} from "style/layoutStyle";
import ListTitle from "skeleton/component/title/ListTitle";
import InputText from "skeleton/component/input/InputText";
import InputLabel from "skeleton/component/input/InputLabel";
import {StyledInputWrap} from "style/formStyle";

export default function PageSample({pageObj}){
    return (
        <PageBg>
            <Title>Welcome, <br />Sign In</Title>

            <ListTitle children1={<span>Top NFTs</span>} icon="King" children2="See All Rankings" type="blue" />

            <ListTitle children1={<span>Newly Minuted</span>} children2="See More" />

            <StyledInputWrap>
                <InputLabel children="mail" />
                <InputText placeHolder="ex) marketplace@gmail.com" height={48} radius={12} />
            </StyledInputWrap>

            <StyledInputWrap>
                <InputLabel children="password" />
                <InputText placeHolder="8-12 letters and numbers" height={48} radius={12} type="password" />
            </StyledInputWrap>

            <StyledInputWrap>
                <InputLabel children="password" valid={false} />
                <InputText placeHolder="8-12 letters and numbers" height={48} radius={12} type="password" valid={false} />
            </StyledInputWrap>

            <StyledInputWrap>
                <InputLabel children="Nickname" />
                <InputText placeHolder="disabled inputs" disabled={true} height={48} radius={12} />
            </StyledInputWrap>

            <div>
                <Button2 children="Log In" type="blue" height={52} fontSize={16} radius={12} unactive={true} fullSize={true} />
                <Button2 children="Log In" type="blue" height={52} fontSize={16} radius={12} fullSize={true} />
                <Button2 children="Log In" type="purple" height={52} fontSize={16} radius={12} unactive={true} fullSize={true} />
                <Button2 children="Log In" type="purple" height={52} fontSize={16} radius={12} fullSize={true} />
                <Button2 children="active button" height={52} fontSize={16} radius={12} fullSize={true} border={true} />
            </div>



            <div>
                <Button1 children="default button" height={52} fontSize={16} />
                <Button1 children="active button" type="purple" height={52} fontSize={16} />
                <Button1 children="reset button" type="white" height={52} fontSize={16} />
                <Button1 children="apply button" type="blue" height={44} fontSize={14} />
                <Button1 children="disabled button" disabled={true} height={40} fontSize={12} />
            </div>

            <div style={{marginTop:'30px'}}>
                <Button2 children="default button" height={52} fontSize={16} radius={6} />
                <Button2 children="active button" type="purple" height={44} fontSize={14} radius={4}/>
                <Button2 children="disabled button" disabled={true} height={36} fontSize={12} radius={4} />
            </div>

            <div style={{marginTop:'30px'}}>
                <Button3 icon="New" type="purple" height={50} />
                <Button3 icon="Art" type="blue" height={52} />
                <Button3 icon="Music" type="purple" height={44} />
                <Button3 icon="Sports" type="blue" height={60} />
                <Button3 icon="Vr" type="purple" />
                <Button3 icon="SdCard" type="blue" />
                <Button3 icon="Items" type="purple" />
                <Button3 icon="Domain" type="blue" />
            </div>

        </PageBg>
    )
}
