import React, {useState} from "react";
import Button from "skeleton/component/button/RoundButton";
import Typography from "skeleton/component/text/Typography";
import { UserImage }  from "style/cardStyle";
import { AccordionStyle }  from "style/cardStyle";


import { TabButton }  from "style/textButton"

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

export function Tab({title, isSelectd, action}) {
    return (
        <TabButton onClick={action} className={isSelectd? "active":null}>
            <span>{title}</span>
        </TabButton>
    )
}

const AccordionItem = ({
    show,
    ariaExpanded,
    item,
    index,
    onClick,
  }) => (
    <div className="faq__question" key={item.name}>
        <button
        aria-expanded={ariaExpanded}
        className={`btn-accordion ${item.name}`}
        onClick={onClick}
        >
            <Typography variant="span" name={`status ${item.name}`}>
                <span></span>{item.type}
            </Typography>
        </button>
        <div className={`faq__desc ${show}`}>
            {item.answer}
        </div>
    </div>
);

// {
//     type: "Listings",
//     count: 2,
//     eth: 1.5,
//     dollar: '$1100',
//     name: 'Artblockmaster',
//     img: 'https://shared-comic.pstatic.net/thumb/webtoon/748105/thumbnail/thumbnail_IMAG06_fa3bf10d-1b8f-40cd-a8eb-01caf9bbc3e4.jpg',
//     expire: 'Doesn’t expire'
// }


export const Accordion = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(1);
  
    const rendereddata = data.map((item, index) => {
        const show = index === activeIndex ? "show" : "";
        const ariaExpanded = index === activeIndex ? "true" : "false";

        return (
            <AccordionItem
                show={show}
                ariaExpanded={ariaExpanded}
                item={item}
                index={index}
                onClick={() => {
                    setActiveIndex(index);
                }}
            />
        );
        
    });
  
    return (
        <div className="accordion">
            {rendereddata}
        </div>
    );
};
  