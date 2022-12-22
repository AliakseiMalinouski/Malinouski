import React from "react";
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadArrayItems } from "../Redux/itemsSlice";
import { Items } from "./Items";
import {CSSTransition} from 'react-transition-group';

export const Home = () => {

    const [cash, setCash] = useState(80000000);
    const [currentPrice, setCurrentPrice] = useState(null);
    const [active, setActive] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const cashChangd = useRef();

    let dispatch = useDispatch();

    useEffect(() => {
        let url = "https://gist.githubusercontent.com/AliakseiMalinouski/16cd68b98a0e568dadbcf4b5c29ab385/raw/e2c73737d9da1cd49ba840802c121f3fda226c63/BreakingBadBaseArray"
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

    const buyItem = (price, code) => {
        if (price > cash) {
            setCash(prev => prev);
        }
        else {
            setCash(prevValue => prevValue - price);
            setCurrentPrice(price);
            setActive(true);
        }
        let selectedElement = itemsList.find(el => {
            return el.code === code;
        });
        console.log(selectedElement)
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
            <div><CSSTransition in={active} timeout={500} classNames='my-node'>
                <div className="Number" ref={cashChangd}>{cash.toFixed(2)}$ <span className="Precent">{`Remaining: ${((cash * 100) / 80000000).toFixed(6)} %`}</span></div>
            </CSSTransition></div>
        </div>
        <div className="HomePage">
            <div className="Search">
                <h4>Enter a name</h4>
                <input type='text' value={searchValue} placeholder='name' onChange={(eo) => {
                    setSearchValue(eo.target.value);
                }} />
            </div>
        <div className="WrapperItems">
            {
                itemsList.filter(element => {
                    return element.name.toLowerCase().includes(searchValue.toLowerCase())
                }).map(e => <Items key={e.code} cbIn={buyItem} cbDc={sellItem} code={e.code} name={e.name} image={e.image} price={e.price} quanlity={e.quanlity} buy={e.buy} sell={e.sell} />)
            }
        </div>
        <div className="Bucket">
            
        </div>
    </div>
    </div>
}