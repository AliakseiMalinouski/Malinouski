import React from "react";
import { useEffect } from "react";
import { imagesThunk } from "../Redux/imagesThunk";
import {useDispatch, useSelector} from 'react-redux';
import { MemeImage } from "./MemeImage";

export const Home = () => {

    let dispatch = useDispatch();

    const images = useSelector(state => state.images.data);

    useEffect(() => {
        dispatch(imagesThunk);
    }, [dispatch]);


    return (
        <div className="Home">
            <h4>Popular meme templates</h4>
            <h5>Select a meme template to start making your own meme!</h5>
            <div className="MemesExamples">
                {
                    images.map(e => <MemeImage key={e.code} code={e.code} name={e.name} url={e.url}/>)
                }
            </div>
        </div>
    )
}