import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getText } from '../redux/infoCategorySlice';

export const Guide = () => {

    const dispatch = useDispatch();

    const informationCategory = useSelector(state => state.informationAboutCategory);


    function setText() {
        dispatch(getText({ needInfo: 'Some information about category', changeIsView: true }));
    }

    return (
        <div className='WrapperGuide'>
            <h3 className='Title'>How to read more?</h3>
            {
                (!informationCategory.isView) 
                    ?
                    <button className='ButtonGetInfoCategory' type='button' onClick={setText}>Discover</button>
                    :
                    null
            }
            <div className='InformationCategory'>
                {informationCategory.info}
            </div>
        </div>
    )
}