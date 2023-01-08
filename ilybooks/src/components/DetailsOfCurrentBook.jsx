
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavouriteBook } from "../Redux/favouriteBookSlice";

export const DetailsOfCurrentBook = ({ code, image, name, type, arrow, item }) => {

    const favouriteBooks = useSelector(state => state.favouriteBook.book);

    let dispatch = useDispatch();
    
    const addToFavourite = () => {
        let clone = [...favouriteBooks];
        let isInArray = false;
        clone.forEach(element => {
            if (element.code === item.code) isInArray = true;
        })
        if(!isInArray) dispatch(getFavouriteBook(item));
    }

    return (
        <div className="CurrentBook">
            <img src={image} alt='Current Book' className="BookImage"/>
            <div className='InformationAboutCurrentBook'>
                <div className="BookName">
                    <h4>{name}</h4>
                    <button type="button">Add to cart</button>
                    <div className="LikeButton" onClick={addToFavourite}>
                        <img src="https://i.ibb.co/wNTx56p/heart.png" alt="Heart"/>
                    </div>
                    <p className="BookPrice">$9.99</p>
                </div>
                <div className="AboutBook">
                    <h4>About this ebook <img src='https://i.ibb.co/479tw9L/Arrow-1-2.png' alt="Arrow"/></h4>
                    <p>NOW A MAJOR MOTION PICTURE directed by Denis Villeneuve, starring Timothée Chalamet, Zendaya, Jason Momoa, Rebecca Ferguson, Oscar Isaac, Josh Brolin, Stellan Skarsgård, Dave Bautista, David Dastmalchian, Stephen McKinley Henderson, Chang Chen, Sharon Duncan-Brewster, Charlotte Rampling, and Javier Bardem. Frank Herbert's classic masterpiece — a triumph of the imagination and one of the bestselling science fiction novels of all time.</p>
                </div>
            </div>
        </div>
    )
}