import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getText } from '../redux/infoCategorySlice';
import { taprolaEvents } from '../events';

export const Guide = () => {

    const [guideUrl, setGuideUrl] = useState("https://gist.githubusercontent.com/AliakseiMalinouski/0bae667633b7e90832592833d3e2ddac/raw/c043c1ba80580447696dd6071ef33d87cb3d1e45/TaprolaCategoryGuide");
    const [guideInfo, setGuideInfo] = useState("");
    const [hint, setHint] = useState(false);

    const dispatch = useDispatch();

    const informationCategory = useSelector(state => state.informationAboutCategory);


    function setText() {
        dispatch(getText({ needInfo: guideInfo, changeIsView: true }));
    }

    useEffect(() => {
        fetch(guideUrl, { method: 'get' })
            .then(response => {
                if (!response.ok) {
                    alert("Error with connection");
                }
                else {
                    return response.text();
                }
            })
            .then(data => {
                setGuideInfo(data);
            })
            .catch(error => {
                alert("Error with request data: " + error);
        })
    }, []);

    function viewHint(EO) {
        setHint(true);
        taprolaEvents.emit('HoverDiscover', 1);
    }

    function hideHint(EO) {
        setHint(false);
        taprolaEvents.emit('UnHoverDiscover', 2);
    }

    return (
        <div className='WrapperGuide'>
            <h3 className='Title'>How to read more?</h3>
            {
                (!informationCategory.isView) 
                    ?
                    <button className='ButtonGetInfoCategory' type='button' onMouseEnter={viewHint} onMouseLeave={hideHint} onClick={setText}>Discover</button>
                    :
                    null
            }
            {
                (!hint) 
                    ? 
                    null
                    :
                    <div className='GuideCategoryHint'>Some hint</div>
            }
            <div className='InformationCategory AnimationInfoCategory'>
                {informationCategory.info}
            </div>
        </div>
    )
}