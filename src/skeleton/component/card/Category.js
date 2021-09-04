import React from "react";
import ListTitle from "skeleton/component/title/ListTitle";
import Typography from "skeleton/component/text/Typography";
import { CategoryBox }  from "style/cardStyle";

function Category({ type, size='full', bg, ...props }) {
    return (
        <CategoryBox size={size} background={bg}>
            <ListTitle children1={type} />

            <Typography variant="body2">
                An online community of makers, developers, and traders is pushing the art world into new territory.
            </Typography>
        </CategoryBox >

    )
}

export default Category;
