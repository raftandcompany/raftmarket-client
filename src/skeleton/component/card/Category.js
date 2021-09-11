import React from "react";
import ListTitle from "skeleton/component/title/ListTitle";
import Typography from "skeleton/component/text/Typography";
import { CategoryBox }  from "style/cardStyle";

function Category({ size='full', bg, data,  ...props }) {
    return (
        <CategoryBox size={size} background={bg}>
            <ListTitle children1= {data != null ? data.title : ""} />
            <Typography variant="body2"> {data != null ? data.subTitle : ""} </Typography>
        </CategoryBox >
    )
}

export default Category;
