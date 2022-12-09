import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListReviews } from '../redux/reviewsSlice';
import { ReviewsList } from './ReviewsListComponent';

export const Reviews = () => {

    let dispatch = useDispatch();

    const reviewsList = useSelector(state => state.informationAboutReviewsList);

    const [targetCode, setTargetCode] = useState(null);

    useEffect(() => {
        fetch("https://gist.githubusercontent.com/AliakseiMalinouski/b409541e50fad6eb063245728cdadfbd/raw/bce265e0d6d072a5efc55ce2547ef07453183b3e/ReviewsListTaprola", { method: 'get' })
            .then(response => {
                if (!response.ok) {
                alert("Error with connection")
                }
                else {
                    return response.json()
                }
            })
            .then(data => {
            dispatch(getListReviews({reviews: data}))
        })
    }, []);

    function view(code) {
        setTargetCode(code);
    }

    function close(code) {
        setTargetCode(null)
    }

    return (
        <div className='WrapperReviews'>
            <h2 className='Title'>Reviews</h2>
            {
                reviewsList.dataReviews.map(e => <ReviewsList key={e.code} code={e.code} name={e.name} rating={e.rating} age={e.age} review={e.review} cbView={view} cbClose={close} targetCode={targetCode} />)
            }
        </div>
    )

}