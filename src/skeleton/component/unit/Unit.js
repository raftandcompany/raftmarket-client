import React, {useState} from "react";
import Button from "skeleton/component/button/RoundButton";
import Typography from "skeleton/component/text/Typography";
import { UserImage }  from "style/cardStyle";

import { SvgStar, SvgStarFill, SvgMore, SvgLink, SvgSearch }  from "asset/SvgImg";
import { SvgShare } from "asset/SvgSns"

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
        // <Button as={"a"} icon="search" className="btn-favorite">{checked ? <SvgStar /> : <SvgStarFill />}</Button>

        <button className="btn-favorite">{checked ? <SvgStar /> : <SvgStarFill />}</button>
    )
};

export const Share = () => {
    return (
        <button className="btn-share"><SvgShare /></button>
    )
}

export const More = () => {
    return (
        <button className="btn-more"><SvgMore /></button>
    )
}

export const Link = () => {
    return (
        <button className="btn-link"><SvgLink /></button>
    )
}

export const Search = () => {
    return (
        <button className="btn-link"><SvgSearch /></button>
    )
}

export const Owner = ({img, text, type}) => {
    return (
        <Typography variant="span">
            <UserImage src={img} alt="image" className="user-img" /><span className="text">{text}</span>
            {type? <span className="type-owner">owner</span> : null}
        </Typography>
    )
}