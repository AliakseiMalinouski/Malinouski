import React from 'react';
import { useState, useEffect, useRef } from 'react';

export const Slider = () => {

    const [leftSliderTrack, setWidthSliderTrack] = useState(0);

    const staticLeft = 760;

    const previous = () => {
        console.log('prev')
        setWidthSliderTrack(prev => prev + staticLeft);
        leftSliderTrack >= 0 ? setWidthSliderTrack(-1520) : null;
    }

    const next = () => {
        setWidthSliderTrack(prev => prev - staticLeft);
        leftSliderTrack <= -1140 ? setWidthSliderTrack(0) : null;
    }

    console.log(leftSliderTrack)

    return (
        <div className='WrapperSlider'>
            <div className='Slider'>
                <div className='SliderTrack' style={{left: leftSliderTrack + 'px'}}>
                    <div className='Slide1'></div>
                    <div className='Slide2'></div>
                    <div className='Slide3'></div>
                </div>
            </div>
            <button onClick={previous}>prev</button>
            <button onClick={next}>next</button>
        </div>
    )

}