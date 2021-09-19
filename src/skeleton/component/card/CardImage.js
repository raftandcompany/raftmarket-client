import React from "react";

function CardImage({ size = 'full', src,  ...props }) {
    return (
        <div className="card-image">
            <img src={src} alt="image" />
        </div>
    )
}
export default CardImage;
