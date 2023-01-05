import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const DetailsItem = () => {

    let navigate = useNavigate();

    let params = useParams();

    let itemsName = params.item;


    return (
        <div style={{margin: '0 auto', width: '1200px', fontSize: '36px'}}>
            Some information about <span style={{ color: 'red', fontSize: '36px' }}>{itemsName}</span>
            <br/>
            <button type="button" onClick={() => {
                navigate("/")
            }}>Go back</button>
        </div>
    )
}