import React from "react";
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadArrayItems } from "../Redux/itemsSlice";
import { Items } from "./Items";
import { CSSTransition } from 'react-transition-group';
import { Bucket } from "./Bucket";
import { wwEvents } from "../events";
import { changeCode } from '../Redux/currentCodeSlice';

export const Home = React.memo(() => {

    const [cash, setCash] = useState(80000000);
    const [active, setActive] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [bucketArray, setBucketArray] = useState([]);

    const cashChangd = useRef();


    let dispatch = useDispatch();

    useEffect(() => {
        let url = "https://gist.githubusercontent.com/AliakseiMalinouski/16cd68b98a0e568dadbcf4b5c29ab385/raw/52628a8c7975710ed3f912c5596e8c951c266a31/BreakingBadBaseArray"
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
    const currentCodeFromReduxStore = useSelector(state => state.currentCode.code);

    const buyItem = (price, code, item) => {
        dispatch(changeCode({ code: code }));
        if (price > cash) {
            setCash(prev => prev);
        }
        else {
            setCash(prevValue => prevValue - price);
            setActive(true);
        }
        let selectedElement = item;
        validElement(selectedElement);
    }

    const validElement = (item) => {
        let isInFlag = false;
        bucketArray.forEach(el => {
            if (el.code === item.code) isInFlag = true;
        });
        if (!isInFlag) setBucketArray(prev => [...prev, item]);
    }

    const sellItem = (price) => {
        if (cash >= 80000000) {
            setCash(prev => prev = 80000000);

        }
        else {
            setCash(prev => prev + price);
        }
    }

    useEffect(() => {
        wwEvents.addListener('putPriceAndCode', buyItem);
        wwEvents.addListener('dPrice', sellItem);
        return () => {
            wwEvents.removeListener('putPriceAndCode', buyItem);
            wwEvents.removeListener('dPrice', sellItem);
        }
    });


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
                }).map(e => <Items key={e.code} item={e} code={e.code} name={e.name} image={e.image} price={e.price} quanlity={e.quanlity} buy={e.buy} sell={e.sell} />)
            }
        </div>
        <div className="Bucket">
            {
                    bucketArray.map(e => <Bucket key={e.code} code={e.code} name={e.name} image={e.image} price={e.price} buy={e.buy} sell={e.sell}/>)
            }
        </div>
    </div>
    </div>
})