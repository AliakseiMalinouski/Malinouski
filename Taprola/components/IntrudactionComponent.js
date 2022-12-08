import React, { PureComponent } from 'react';
import { useState , useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getDataList } from '../redux/listSlice';

import { IntrudactionList } from './IntrudactionListComponent';

const baseArray = [
    {"code": 1, "image": "./img/iconcreatetoeasy.png", "title": "Make it easy", "paragraph": "To create a element, simply click on the 'Add new item' button", "classNameParagraph": "Paragraph", "classNameTitle": "UnderTitle"},
    {"code": 2, "image": "./img/icon-edit.png", "title": "Change it", "paragraph": "To change element information, click on the 'Edit item' button", "classNameParagraph": "Paragraph", "classNameTitle": "UnderTitle" },
    {"code": 3, "image": "../img/bucket.png", "title": "Delete it easy", "paragraph": "To create a element, simply click on the 'Add new item' button", "classNameParagraph": "Paragraph", "classNameTitle": "UnderTitle"},
    {"code": 4, "image": "./img/color-ico.png", "title": "A varied palette", "paragraph": "To change the colour of the header, click on the 'colour palette' button", "classNameParagraph": "Paragraph", "classNameTitle": "UnderTitle"},
    {"code": 5, "image": "../img/menu.png", "title": "Different categories", "paragraph": "Before you start with Taprola, familiarise yourself with the categories, click on 'Categories' to do so", "classNameParagraph": "Paragraph", "classNameTitle": "UnderTitle"},
    {"code": 6, "image": "../img/language-icon.png", "title": "Change the language", "paragraph": "To change the language, press the 'Planets' button", "classNameParagraph": "Paragraph", "classNameTitle": "UnderTitle"},
    {"code": 7, "image": "../img/spam.png", "title": "Ask a question", "paragraph": "To ask us a question, click on the 'Letter' button", "classNameParagraph": "Paragraph", "classNameTitle": "UnderTitle" },
    {"code": 8, "image": "./img/options-icon.png", "title": "Options", "paragraph": "To access the settings, press the 'Gears' button", "classNameParagraph": "Paragraph", "classNameTitle": "UnderTitle"}
]

export const Intrudaction = () => {

    const [listArray, setListArray] = useState([]);

    const dispatch = useDispatch();

    const list = useSelector(state => state.informationAboutListIntrudaction)

    useEffect(() => {
        fetch("https://gist.githubusercontent.com/AliakseiMalinouski/5373be1277141069e4b420f55c1c68ea/raw/85daa398d6f7dc955b75261e2e867c66cbfa2832/IntrudactionListTaprola", { method: 'get' })
            .then(response => {
                if (!response.ok) {
                    alert("Error")
                }
                else {
                    return response.json();
                }
            })
            .then(data => {
                console.log(data)
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
}
