import React from "react";
import { useLocation } from "react-router-dom";

export const EmptyBasket = () => {

    let params = useLocation();

    let page = params.pathname;

    if (page === '/basket') {
        return (
        <div className="WrapEmptyBasket">
            <p>Basket is empty, add something</p>
            <img style={{width: '200px'}} src="https://img.freepik.com/free-vector/empty-shopping-bag-white-advertising-branding_1284-48173.jpg?w=826&t=st=1673369183~exp=1673369783~hmac=4f7f9af1a000b401bcdf7f32e839e022fdaf8f3bb0c34b4c3b063df71c34b735" alt="Empty Bag"/>
        </div>
    )
    }
    else if (page === '/favourite-books') {
        return (
        <div className="WrapEmptyBasket">
            <p>A favourite is empty, add something</p>
            <img style={{width: '200px'}} src="https://img.freepik.com/free-vector/empty-shopping-bag-white-advertising-branding_1284-48173.jpg?w=826&t=st=1673369183~exp=1673369783~hmac=4f7f9af1a000b401bcdf7f32e839e022fdaf8f3bb0c34b4c3b063df71c34b735" alt="Empty Bag"/>
        </div>
    )   
    }
}