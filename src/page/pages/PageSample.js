import React from "react";
import Button1 from "skeleton/component/button/RoundButton"
import Button2 from "skeleton/component/button/RoundEdgeButton"
import {Title} from "style/textStyle";
import {PageBg} from "style/layoutStyle";
import PageTab from "../component/tab/PageTab";


export default function PageSample({pageObj}){
    return (
        <PageBg>
            <Title>{pageObj.params.title}</Title>
            <Button1 children="default button" />
            <Button1 children="active button" type="active" />
            <Button1 children="reset button" type="reset" />
            <Button1 children="apply button" type="apply" />
            <Button1 children="disabled button" disabled={true} />

            <Button2 chidren="default button" />
            <Button2 chidren="default button" />
        </PageBg>
    )
}
