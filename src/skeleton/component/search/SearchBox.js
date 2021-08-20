import React from "react";
import InputText from "skeleton/component/input/InputText";
import Button from "skeleton/component/button/RoundButton"

import {StyledInputWrap} from "style/formStyle";
import { SvgSearch } from "asset/SvgImg";

function SearchBox({ ...props }) {
    return (
        <StyledInputWrap>
            <div className="search-area">
                <div className="search-box">
                    <InputText placeHolder="Search items, collections" height={44} fontSize={14} radius={8} />
                    <Button as={"a"} href={"/search"} icon="search" />
                </div>
                <Button as={"a"} href={"/alarm"} icon="alarm" />
                { props.new ? <i></i> : null }
            </div>
        </StyledInputWrap>
    )
}

export default SearchBox;
