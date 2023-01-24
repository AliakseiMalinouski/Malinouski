import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { itemsThunk } from '../Redux/itemsThunk';
import { useDispatch, useSelector } from 'react-redux';
import { DetailsOfCurrentBook } from "./DetailsOfCurrentBook";

export const BookDetails = React.memo(() => {

    let dispatch = useDispatch();

    const items = useSelector(state => state.items.data);
    const [currentItem, setCurrentItem] = useState({});

    let params = useParams();

    const bookName = params.bookname;

    useEffect(() => {
        if (!items.length) {
            dispatch(itemsThunk);
        }
        else {
            let clone = [...items];
            clone.forEach(element => {
                if (element.name === bookName) {
                    let currentBook = element;
                    setCurrentItem(currentBook);
                }
            })
        }
    }, [dispatch, currentItem, setCurrentItem, bookName, items]);


    return (
        <div className='CurrentBookDetails'>
            {
                (currentItem)
                    ?
                    <DetailsOfCurrentBook
                        key={currentItem.code}
                        code={currentItem.code}
                        name={currentItem.name}
                        image={currentItem.image}
                        arrow={currentItem.arrow}
                        type={currentItem.type}
                        item={currentItem}
                        description={currentItem.desc}
                        />
                    :
                    <div>Some error</div>
            }
        </div>
    )
})