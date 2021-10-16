import React, {useState, useEffect} from "react";
import EllipseButton from "skeleton/component/button/EllipseButton";
import BorderRadiusButton from "skeleton/component/button/BorderRadiusButton";
import Typography from "skeleton/component/text/Typography";
import {OrderType} from  "store/rest/api/Order";

import { UserImage }  from "style/cardStyle";



import { TabButton }  from "style/textButton"

import { SvgStar, SvgStarFill, SvgMore, SvgLink, SvgSearch, SvgPrice, SvgArrowDown, SvgTime }  from "asset/SvgImg";
import { SvgShare } from "asset/SvgSns"
import {format} from "date-fns";
import {v4 as uuidv4} from "uuid";


//sample
import CardTypeCol from "skeleton/component/card/CardTypeCol";


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


export const Filter = () => {
    return (
        <div className="filter">
        </div>
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
    item, isMine, action, create
  }) => {
    console.log("AccordionItem",item)

    const [isActive, setActive] = useState(false);
    const show = isActive? " show" : "";
    const renderedData1 = item.items.map((i) => {
        return (
            <div className="market"  key={ uuidv4().toString() }>
                <div className="price">
                    <Typography variant="emphasis">
                        <SvgPrice />{i.orderType != null ? i.price : i.eth}<span className="text-sub">
                            {i.dollar}
                        </span>
                    </Typography>
                </div>
                <div className="owner">
                    <Owner 
                        img="https://ssl.pstatic.net/mimgnews/image/109/2021/08/24/0004461747_001_20210824112011683.jpg?type=w540" 
                        text="Artblockmaster" />
                </div>
                {
                    i.expire === 0 && i.orderType == null
                    ? <Typography variant="body1">'Doesn’t expire'</Typography>
                    : <Typography variant="body1" name="time"><SvgTime />{i.orderType != null ? i.expireDate :i.expire}</Typography>
                }
                {
                    (i.orderType === OrderType.Offers && isMine) || (i.orderType === OrderType.Listing && !isMine)
                     ? <EllipseButton
                           children= { i.orderType === OrderType.Offers ? "aprove" : "buy"}
                           type= { i.orderType === OrderType.Offers ? "purple" : "blue" }
                           height={40} fontSize={16}
                           onClick={ e=> {
                                if (action == null) {return}
                                console.log(i)
                                action(i)
                            }}/>
                     : null
                }
            </div>
        );
    });
    const renderedData2 = item.items.map((i) => {
        return (
            <div className="about">
                <Typography variant="span" name="label">{i.label}</Typography>
                <Typography variant="span" name="item">{i.item}</Typography>
                <Typography variant="span" name="rarity">{i.rarity}</Typography>
            </div>
        );
    });

    return (
        <div className="accordion-item" key={item.name}>
            <button
                className={`accordion-button ${item.name}${show}`}
                onClick={() => {
                    setActive(!isActive);
                }}
            >
            <Typography variant="emphasis" name={`status ${item.name}`}>
                {item.name}<span className="text-sub">{item.items.length}</span>
            </Typography>
            {
                item.items.length > 0 ? <SvgArrowDown /> : null
            }
            </button>

            <div className={`accordion-cont ${show}`}>
            {
                item.type === 'row' ? renderedData1 : renderedData2
            }
            </div>
            {
                item.name === 'offers'
                    ? <BorderRadiusButton
                        children={ isMine === true ? "Make a Listing" : "Make an Offer"}
                        type="purple" fullSize={true}  onClick={() => {
                        if (create == null) {return}
                        console.log("create")
                        create()

                    }}/>
                    : null
            }
        </div>
    );
};

export const Accordion = ({ data , isMine , action, create}) => {
    const renderedData = data.map((item) => {

        return (
            <AccordionItem
                key={ uuidv4().toString() }
                item={item}
                isMine={isMine}
                action={action}
                create={create}
            />
        );
    });
    return (
        <div className="accordion">
            {renderedData}
        </div>
    );
};
  






const AccordionItem2 = ({
    item, isMine, action, create
  }) => {
    console.log("AccordionItem",item)

    const [isActive, setActive] = useState(false);

    useEffect(() => {
        if (item.status === 'show') {
            setActive(true);
        }
	}, []);

    const show = isActive? " show" : "";
    const renderedData1 = item.items.map((i) => {
        return (
            <div className="market"  key={ uuidv4().toString() }>
                <div className="price">
                    <Typography variant="emphasis">
                        <SvgPrice />{i.orderType != null ? i.price : i.eth}<span className="text-sub">
                            {i.dollar}
                        </span>
                    </Typography>
                </div>
                <div className="owner">
                    <Owner 
                        img="https://ssl.pstatic.net/mimgnews/image/109/2021/08/24/0004461747_001_20210824112011683.jpg?type=w540" 
                        text="Artblockmaster" />
                </div>
                {
                    i.expire === 0 && i.orderType == null
                    ? <Typography variant="body1">'Doesn’t expire'</Typography>
                    : <Typography variant="body1" name="time"><SvgTime />{i.orderType != null ? i.expireDate :i.expire}</Typography>
                }
                {
                    (i.orderType === OrderType.Offers && isMine) || (i.orderType === OrderType.Listing && !isMine)
                     ? <EllipseButton
                           children= { i.orderType === OrderType.Offers ? "aprove" : "buy"}
                           type= { i.orderType === OrderType.Offers ? "purple" : "blue" }
                           height={40} fontSize={16}
                           onClick={ e=> {
                                if (action == null) {return}
                                console.log(i)
                                action(i)
                            }}/>
                     : null
                }
            </div>
        );
    });
    const renderedData2 = item.items.map((i) => {
        return (
            <div className="about">
                <Typography variant="span" name="label">{i.label}</Typography>
                <Typography variant="span" name="item">{i.item}</Typography>
                <Typography variant="span" name="rarity">{i.rarity}</Typography>
            </div>
        );
    });

    return (
        <div className="accordion-item" key={item.name}>
            <button
                className={`accordion-button ${item.name}${show}`}
                onClick={() => {
                    setActive(!isActive);
                }}
            >
            <Typography variant="emphasis" name={`status ${item.name}`}>
                {item.name}
            </Typography>
            {
                item.items.length > 0 ? <SvgArrowDown /> : null
            }
            </button>

            <div className={`accordion-cont ${show}`}>
                <section className="list">
                    {<CardTypeCol />}
                </section>
            </div>
            
        </div>
    );
};


export const Accordion2 = ({ data , isMine , action, create}) => {
    const renderedData = data.map((item) => {

        return (
            <AccordionItem2
                key={ uuidv4().toString() }
                item={item}
                isMine={isMine}
                action={action}
                create={create}
            />
        );
    });
    return (
        <div className="accordion">
            {renderedData}
        </div>
    );
};
  