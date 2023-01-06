import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { itemsThunk } from '../Redux/itemsThunk';
import { useDispatch, useSelector } from 'react-redux';

export const BookDetails = React.memo(() => {

    let dispatch = useDispatch();

    const items = useSelector(state => state.items.data);

    let params = useParams();

    const bookName = params.bookname;

    useEffect(() => {
        if(!items.length) dispatch(itemsThunk);
    }, [dispatch]);

    console.log(items)

    return (
        <div>
            <div>Some information about book : {bookName}</div>
        </div>
    )
})