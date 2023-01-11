import React from "react";

export const BookBasket = ({code, name, arrow, image, type, author}) => {
    return (
        <div className="BasketBook">
            <img src={image} alt='Book' />
            <div className="AuthorAndName">
                <h4>{name}</h4>
                <h5>{author}</h5>
            </div>
        </div>
    )
}