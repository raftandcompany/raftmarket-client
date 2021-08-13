import React from "react";
import Button from "skeleton/component/button/RoundButton"
import {Title} from "style/textStyle";
import {PageBg} from "style/layoutStyle";
import PageTab from "../component/tab/PageTab";


export default function PageSample({pageObj}){
    return (
        <PageBg>
            <Title>{pageObj.params.title}</Title>
            <Button children="default button" />
            <Button children="active button" type="active" />
            <Button children="reset button" type="reset" />
            <Button children="apply button" type="apply" />
            <Button children="disabled button" disabled={true} />
        </PageBg>
    )
}
