import React, {useState} from "react";
import Button from "skeleton/component/button/RoundButton";
import Typography from "skeleton/component/text/Typography";
import { UserImage }  from "style/cardStyle";
import { AccordionStyle }  from "style/cardStyle";


import { TabButton }  from "style/textButton"

import { SvgStar, SvgStarFill, SvgMore, SvgLink, SvgSearch, SvgPrice, SvgArrowDown, SvgTime }  from "asset/SvgImg";
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
    item,
    //onClick,
  }) => {
    const [isActive, setActive] = useState(false);
    const show = isActive? "show" : "";

    return (
        <div className="accordion-item" key={item.name}>
            <button
            className={`accordion-button ${item.name} ${show}`}
            onClick={() => {
                setActive(!isActive);
            }}
            >
                <Typography variant="emphasis" name={`status ${item.name}`}>
                    {item.name}<span className="text-sub">{item.count}</span>
                </Typography>
                <SvgArrowDown />
            </button>
            {
                item.type === 'row' ? 
                <div className={`accordion-cont ${show}`}>
                    <div className="price">
                        <Typography variant="emphasis">
                            <SvgPrice />{item.eth}<span className="text-sub">{item.dollar}</span>
                        </Typography>
                    </div>
                    <div className="owner">
                        <Owner 
                            img="https://ssl.pstatic.net/mimgnews/image/109/2021/08/24/0004461747_001_20210824112011683.jpg?type=w540" 
                            text="Artblockmaster" />
                    </div>
                    {
                        item.expire === 0 
                        ? 'Doesn’t expire' 
                        : <Typography variant="body1" name="time"><SvgTime />{item.expire}</Typography>
                    }
                </div> :
                <div className={`accordion-cont ${show}`}>
                        <div className="price">
                        <Typography variant="emphasis">
                            <SvgPrice />{item.eth}<span className="text-sub">{item.dollar}</span>
                        </Typography>
                    </div>
                    <div className="owner">
                        <Owner 
                            img="https://ssl.pstatic.net/mimgnews/image/109/2021/08/24/0004461747_001_20210824112011683.jpg?type=w540" 
                            text="Artblockmaster" 
                            type="owner" />
                    </div>
                </div>
            }
        </div>
    );
};

export const Accordion = ({ data }) => {
    //const [isActive, setActive] = useState(false);
  
    const rendereddata = data.map((item) => {
        // const show = isActive? "show" : "";
        // const ariaExpanded = isActive? "true" : "false";

        return (
            <AccordionItem
                // show={show}
                // ariaExpanded={ariaExpanded}
                item={item}

            />
        );
        
    });
  
    return (
        <div className="accordion">
            {rendereddata}
        </div>
    );
};
  