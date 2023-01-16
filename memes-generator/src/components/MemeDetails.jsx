import React from "react";
import {useParams} from 'react-router-dom';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { CurrentMeme } from "./CurrentMeme";

export const MemeDetails = () => {

    const [currentMem, setCurrentMem] = useState({});

    const mem = useSelector(state => state.images.data);

    let params = useParams();

    let memeName = params.memename;

    useEffect(() => {
        let currentMem = mem.find(element => {
            return element.name === memeName
        });
        setCurrentMem(currentMem);
    }, [mem, memeName]);

    return (
        <div className="MemeDetails">
            <CurrentMeme key={currentMem.code} code={currentMem.code} name={currentMem.name} url={currentMem.url}/>
        </div>
    )
}