import React ,{useState}from "react";
import InputText from "skeleton/component/input/InputText";
import Button from "skeleton/component/button/RoundButton"

import {StyledInputWrap} from "style/formStyle";
import { SvgSearch } from "asset/SvgImg";

function SearchBox({ keyword = "", back, search, ...props }) {
    const [searchKeyword, setSearchKeyword] = useState(keyword)
    return (
        <StyledInputWrap>
            <div className="search-area">
                {props.result ? <Button as={"a"} onClick={ e=> back() } icon="back" /> : null }
                <div className="search-box">
                    <InputText onChange={e=>setSearchKeyword(e.target.value)}
                        placeHolder="Search items, collections" height={44} fontSize={14} radius={8} />
                    <Button as={"a"} onClick={e=> search(searchKeyword)} icon="search" />
                </div>
                { !props.result ?
                    <Button as={"a"} icon="alarm" /> : null
                }
                { props.new ? <i></i> : null }
            </div>
        </StyledInputWrap>
    )
}

export default SearchBox;
