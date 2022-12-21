import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadArrayItems } from "../Redux/itemsSlice";
import { Items } from "./Items";

export const Home = () => {

    const [cash, setCash] = useState(80000000);
    const [currentPrice, setCurrentPrice] = useState(null);

    let dispatch = useDispatch();

    useEffect(() => {
        let url = "https://gist.githubusercontent.com/AliakseiMalinouski/16cd68b98a0e568dadbcf4b5c29ab385/raw/0bf4184a9820bf2e43379b5f2fe4eca670c4e291/BreakingBadBaseArray"
        fetch(url, { method: 'get' })
            .then(response => {
                if (!response.ok) {
                    alert("error with connection");
                }
                else {
                    return response.json();
                }
            })
            .then(data => {
                dispatch(loadArrayItems({ data: data }));
        })
    }, [dispatch]);


    const itemsList = useSelector(state => state.informationAboutItems.items);

    const buyItem = (price) => {
        if (price > cash) {
            setCash(prev => prev);
        }
        else {
            setCash(prevValue => prevValue - price);
            setCurrentPrice(price);
        }
    }

    const sellItem = (price) => {
        if (cash >= 80000000) {
            setCash(prev => prev = 80000000);

        }
        else if (price !== currentPrice) {
            return null;
        }
        else {
            setCash(prev => prev + price);
        }
    }


    return <div className="BaseWrapper">
        <div className="Cash">
            <div className="Number">{cash.toFixed(2)}$</div>
        </div>
        <div className="HomePage">
        <div className="WrapperItems">
            {
                itemsList.map(e => <Items key={e.code} cbIn={buyItem} cbDc={sellItem} code={e.code} name={e.name} image={e.image} price={e.price} quanlity={e.quanlity} buy={e.buy} sell={e.sell} />)
            }
        </div>
    </div>
    </div>
}