import React, { PureComponent } from 'react';
import { useState , useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getDataList } from '../redux/listSlice';

import { IntrudactionList } from './IntrudactionListComponent';

export const Intrudaction = React.memo(() => {

    const [listArray, setListArray] = useState([]);

    const dispatch = useDispatch();

    const list = useSelector(state => state.informationAboutListIntrudaction);

    useEffect(() => {
        fetch("https://gist.githubusercontent.com/AliakseiMalinouski/5373be1277141069e4b420f55c1c68ea/raw/6eae4b2bee9026a34644a72597f251411a1f5877/IntrudactionListTaprola", { method: 'get' })
            .then(response => {
                if (!response.ok) {
                    alert("Error")
                }
                else {
                    return response.json();
                }
            })
            .then(data => {
                dispatch(getDataList({ listInt: data }));
            })
    }, []);

    return (
        <div className='WrapperWelcomeAlert'>
            <h2 className='TitleWelcome'>Meet the Taprola!</h2>
            {
                list.data.map(e => <IntrudactionList key={e.code} image={e.image} title={e.title} paragraph={e.paragraph} classNameParagraph={e.classNameParagraph} classNameTitle={e.classNameTitle} />)
            }
            <NavLink className='ButtonStartWork' to="/taprola">Get to work</NavLink>
        </div>
    )
})
