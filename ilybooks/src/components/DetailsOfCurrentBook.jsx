

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavouriteBook } from "../Redux/favouriteBookSlice";
import { getItemsBasket } from "../Redux/basketSlice";

export const DetailsOfCurrentBook = ({ code, image, name, type, arrow, item, description }) => {

    const favouriteBooks = useSelector(state => state.favouriteBook.book);
    const itemsBasket = useSelector(state => state.basket.basket);
    
    const [selected, setSelected] = useState(false);
    const [isBasket, setIsBasket] = useState(false);

    let dispatch = useDispatch();

    useEffect(() => {
        let clone = [...favouriteBooks];
        let isInArray = false;
        clone.forEach(element => {
            if (element.code === item.code) isInArray = true;
        })
        if (isInArray) setSelected(true);
    }, [favouriteBooks, selected, item]);


    useEffect(() => {
        let clone = [...itemsBasket];
        let flag = false;
        clone.forEach(elem => {
            if (elem.code === item.code) flag = true;
        });
        if (flag) setIsBasket(true);
    }, [itemsBasket, isBasket, setIsBasket, item]);
    
    const addToFavourite = () => {
        let clone = [...favouriteBooks];
        let isInArray = false;
        clone.forEach(element => {
            if (element.code === item.code) isInArray = true;
        })
        if(!isInArray) dispatch(getFavouriteBook(item));
    }

    const addItemToBasket = () => {
        let clone = [...itemsBasket];
        let isInArray = false;
        clone.forEach(element => {
            if (element.code === item.code) isInArray = true;
        });
        if (!isInArray) dispatch(getItemsBasket(item));
    }

    return (
        <div className="CurrentBook">
            <img src={image} alt='Current Book' className="BookImage"/>
            <div className='InformationAboutCurrentBook'>
                <div className="BookName">
                    <h4>{name}</h4>
                    {
                        (!isBasket)
                            ?
                            <button type="button" onClick={addItemToBasket}>Add to cart</button>
                            :
                            <button type="button">In basket</button>
                    }
                    <div className="LikeButton" onClick={addToFavourite}>
                        {
                            (selected)
                                ?
                                <img src="https://cdn-icons-png.flaticon.com/512/32/32557.png" alt="Black Heart"/>
                                :
                                <img src="https://i.ibb.co/wNTx56p/heart.png" alt="Heart"/>
                        }
                    </div>
                    <p className="BookPrice">$9.99</p>
                </div>
                <div className="AboutBook">
                    <h4>About this ebook <img src='https://i.ibb.co/479tw9L/Arrow-1-2.png' alt="Arrow"/></h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}