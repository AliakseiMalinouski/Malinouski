import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listThunk } from '../Redux/listThunk';
import { iconThunk } from '../Redux/iconThunk';

export const Header = () => {

    let dispatch = useDispatch();

    const list = useSelector(state => state.list.data);
    const icons = useSelector(state => state.icons.data);

    useEffect(() => {
        dispatch(listThunk);
    }, [dispatch]);

    useEffect(() => {
        dispatch(iconThunk);
    }, [dispatch]);

    console.log(icons)

    return (
        <div className='Header'>
            <img src='https://i.ibb.co/vdKGBYM/ilybooks.png' alt='Logo' className='Logo' />
            <ul className='ListPageHeader'>
                {
                    list.map(e => <li key={e.code} className='ListPage'>{e.page}</li>)
                }
            </ul>
            <div className='RestHeader'>
                <input type='text' className='Search' />
                <img src='https://i.ibb.co/RzHWngP/Vector-4.png' alt='Search Button' className='SearchButton'/>
                {
                    icons.map(e => <img key={e.code} src={e.url} alt='Icon'/>)
                }
            </div>
            <div className='BigStaticText'>
                <p></p>
            </div>
        </div>
    )
}