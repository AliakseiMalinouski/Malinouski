import React from "react";
import { useParams } from "react-router-dom";

export const BookDetails = () => {

    let params = useParams();

    const bookName = params.bookname;

    return (
        <div>
            <div>Some information about book : {bookName}</div>
        </div>
    )
}