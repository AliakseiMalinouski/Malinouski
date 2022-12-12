import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataGallery } from '../redux/gallerySlice';
import { GallerySlides } from './GallerySlidesComponent';

export const Slider = () => {

    const galleryArray = useSelector(state => state.informationAboutGallery);

    let dispatch = useDispatch();

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

    useEffect(() => {
        fetch("https://gist.githubusercontent.com/AliakseiMalinouski/d6798bcc83126b681ebe4721d0adfc68/raw/ebff38fec9d70900f5b4674733b27434dc20f54e/GalleryTaprolaArray", { method: 'get' })
            .then(response => {
                if (!response.ok) {
                    alert("Error with connection")
                }
                else {
                    return response.json();
                }
            })
            .then(data => {
                dispatch(getDataGallery({array: data}));
            })
    }, []);

    return (
        <div className='WrapperSlider'>
            <div className='Slider'>
                <div className='SliderTrack' style={{left: leftSliderTrack + 'px'}}>
                    {/* <div className='Slide1'></div>
                    <div className='Slide2'></div>
                    <div className='Slide3'></div> */}
                    {
                        galleryArray.data.map(e => <GallerySlides key={e.code} code={e.code} name={e.name} description={e.description} image={e.image} />)
                    }
                </div>
            </div>
            <div className='ButtonsGallery'>
                <button type='button' onClick={previous}>{`${'<'}`}</button>
                <button type='button' onClick={next}>{`${'>'}`}</button>
            </div>
        </div>
    )

}