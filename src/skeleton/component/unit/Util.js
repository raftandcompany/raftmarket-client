import React, {useState} from "react";
import Button from "skeleton/component/button/RoundButton"

import {ShareBox, ShareBtn} from "style/shareStyle";

function Util({ name, back, ...props }) {
    //const [searchKeyword, setSearchKeyword] = useState(keyword)
    return (
        <div className="utilbox">
            {props.result ? <Button as={"a"} onClick={ e=> back() } icon="back" /> : null }
            <ShareBtn className={`btn-${name}`}>
                <Button
                    icon = { name }
                    />
            </ShareBtn>

        </div>
    )
}

export default Util;