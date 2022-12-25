import React from "react";

export const Bucket = ({ name, code, quanlity, price, image }) => {

    return (
        <div className="WrapperBucket">
            <div className="BucketItem">
                <div className="BucketName">Name: {name}</div>
                <div className="BucketPrice">Price: {price}$</div>
            </div>
        </div>
    )
}