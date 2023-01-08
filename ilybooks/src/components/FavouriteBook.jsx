import React from "react";


export const FavouriteBook = ({code, name, arrow, image, type}) => {
    return (
        <div className="FavouriteBook">
            <img src={image} alt='Book' />
            <div className="AuthorAndName">
                <h4>{name}</h4>
                <h5>Frank Herbert</h5>
            </div>
        </div>
    )
}