import React from "react";


export const Images = ({ code, image, name, backgroundColor, targetImage, cbOpenImage, parent }) => {
    
    const openImage = () => {
        cbOpenImage(code);
    }

    if (code == targetImage) {
        return (
            <div className='ImageOpened' style={{backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: '100% 100%'}}>
                
            </div>
        )
    }
    else {
        return (
        <div className='ImageDefault' style={{backgroundColor: backgroundColor}} onClick={openImage}>
            {name}
        </div>
    )
    }
}