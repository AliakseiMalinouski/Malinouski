import React from "react";
import { useState, useEffect } from 'react';

export const Bucket = ({ name, code, quanlity, price, image }) => {

    return (
        <div className="WrapperBucket">
            <div className="BucketItem">
                <div className="BucketName">Name: {name}</div>
                <div className="BucketQuantity">Quantity: {quanlity}</div>
            </div>
        </div>
    )
}