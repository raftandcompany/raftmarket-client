import React from "react";
import Button1 from "skeleton/component/button/RoundButton"
import Button2 from "skeleton/component/button/BorderRadiusButton"
import {Title} from "style/textStyle";
import {PageBg} from "style/layoutStyle";
import PageTab from "../component/tab/PageTab";


export default function PageSample({pageObj}){
    return (
        <PageBg>
            <Title>{pageObj.params.title}</Title>

            <div>
                <Button1 children="default button" height={52} fontSize={16} />
                <Button1 children="active button" type="active" height={52} fontSize={16} />
                <Button1 children="reset button" type="reset" height={52} fontSize={16} />
                <Button1 children="apply button" type="apply" height={44} fontSize={14} />
                <Button1 children="disabled button" disabled={true} height={40} fontSize={12} />
            </div>

            <div style={{marginTop:'30px'}}>
                <Button2 children="default button" height={52} fontSize={16} radius={6} />
                <Button2 children="active button" type="active" height={44} fontSize={14} radius={4}/>
                <Button2 children="disabled button" disabled={true} height={36} fontSize={12} radius={4} />
            </div>

        </PageBg>
    )
}
