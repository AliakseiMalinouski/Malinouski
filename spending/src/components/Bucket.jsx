import React from "react";

export const Bucket = ({name, code, quantity, price, image}) => {
    return (
        <div className="WrapperBucket">
            <div className="BucketItem">
                <div className="BucketName">Name: {name}</div>
                <div className="BucketQuantity">Quantity: {quantity}</div>
            </div>
        </div>
    )
}