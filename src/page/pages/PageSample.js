import React from "react";
import Button1 from "skeleton/component/button/EllipseButton"
import Button2 from "skeleton/component/button/BorderRadiusButton"
import Button3 from "skeleton/component/button/RoundButton"
import {Title} from "style/textStyle";
import {PageBg} from "style/layoutStyle";
import ListTitle from "skeleton/component/title/ListTitle";

export default function PageSample({pageObj}){
    return (
        <PageBg>
            <Title>{pageObj.params.title}</Title>

            <ListTitle children={<span>Newly Minuted</span>} icon="King" />

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
