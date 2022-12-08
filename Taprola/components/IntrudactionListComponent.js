import React from 'react';


export const IntrudactionList = ({title, paragraph, classNameParagraph, classNameTitle, image}) => {
    return (
        <div>
            <h2 className={classNameTitle}> <img src={image} alt='Image'/> {title}</h2>
            <p className={classNameParagraph}>{paragraph}</p>
        </div>
    )
}