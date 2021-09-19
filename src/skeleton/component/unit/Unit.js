import React, {useState} from "react";
import RoundButton from "skeleton/component/button/RoundButton"
import { SvgStar, SvgStarFill }  from "asset/SvgImg";

// function Unit({ name, ...props }) {
//     //const [searchKeyword, setSearchKeyword] = useState(keyword)
//     return (
//         <ShareBox>

//             <ShareBtn className={`btn-${name}`}>
//                 <RoundButton
//                     icon = { name }
//                     />
//             </ShareBtn>

//         </ShareBox>
//     )
// }

export const Favorite = (checked) => {
    return (
        <i className="ico-favorite">{checked ? <SvgStar /> : <SvgStarFill />}</i>
    )
};