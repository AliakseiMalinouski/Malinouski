import React from "react";
import { useNavigate } from "react-router-dom";

export const MemeImage = ({code, name, url}) => {

    let navigate = useNavigate();

    const goToMemesCreate = () => {
        const uri = "/meme-details/" + name;
        navigate(uri);
    }

    return (
        <div className="MemeImage" onClick={goToMemesCreate}>
            <img src={url} alt='Meme'/>
        </div>
    )
}