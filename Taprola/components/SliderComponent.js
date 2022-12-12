import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataGallery } from '../redux/gallerySlice';
import { GallerySlides } from './GallerySlidesComponent';

export const Slider = () => {

    const galleryArray = useSelector(state => state.informationAboutGallery);

    let dispatch = useDispatch();

    const [leftSliderTrack, setWidthSliderTrack] = useState(0);
    const [isClickedPreviousButton, setIsClickedPreviousButton] = useState(false);
    const [isClickedNextButton, setIsClickedNextButton] = useState(false);

    const staticLeft = 760;

    const previous = () => {
        setWidthSliderTrack(prev => prev + staticLeft);
        leftSliderTrack >= 0 ? setWidthSliderTrack(-1520) : null;
        setIsClickedPreviousButton(true);
    }

    const next = () => {
        setWidthSliderTrack(prev => prev - staticLeft);
        leftSliderTrack <= -1140 ? setWidthSliderTrack(0) : null;
        setIsClickedNextButton(true);
    }

    useEffect(() => {
        if (isClickedNextButton) {
            setTimeout(() => {
                setIsClickedNextButton(false);
            }, 300);
        }
        else if (isClickedPreviousButton) {
            setTimeout(() => {
                setIsClickedPreviousButton(false);
            }, 300);
        }
    }, [isClickedNextButton, isClickedPreviousButton]);

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
                    {
                        galleryArray.data.map(e => <GallerySlides key={e.code} code={e.code} name={e.name} description={e.description} image={e.image} />)
                    }
                </div>
            </div>
            <div className='ButtonsGallery'>
                {
                    !isClickedPreviousButton ? <button type='button' onClick={previous}>{`${'<'}`}</button> : <button type='button' onClick={previous} style={{backgroundColor: 'red', opacity: '1'}}>{`${'<'}`}</button>
                }
                {
                    !isClickedNextButton ? <button type='button' onClick={next}>{`${'>'}`}</button> : <button type='button' onClick={next} style={{backgroundColor: 'red', opacity: '1'}}>{`${'>'}`}</button>
                }
            </div>
        </div>
    )

}