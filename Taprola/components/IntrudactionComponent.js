import React, { PureComponent } from 'react';
import PropTypes, { element } from 'prop-types';
import { NavLink } from 'react-router-dom';
import CreateIcon from '../json/icon-create.json';
import IconEdit from '../json/icon-edit.json';
import IconPallete from '../json/icon-pallete.json';

class Intrudaction extends PureComponent {
    
    render() {
        return <div className='WrapperWelcomeAlert'>
            <h2 className='TitleWelcome'>Meet the Taprola!</h2>
            <h4 className='UnderTitleMakeItEasy'><img src={CreateIcon} alt='Pencil' /> Make it easy</h4>
            <p className='ParagraphAboutCreate'>To create a product,<br /> simply click on the "Add new item" button</p>
            <h4 className='UnderTitleEdit'><img src={IconEdit} alt='Arrows' /> Change it</h4>
            <p className='ParagraphAboutEdit'>To change item information,<br /> click on the "Edit item" button</p>
            <h4 className='UnderTitlePalette'><img src={IconPallete} /> A varied palette!</h4>
            <p className='ParagraphAboutPallete'>To change the colour of the header,click on the "colour palette" button</p>
            <NavLink className='ButtonStartWork' to="/taprola">Get to work</NavLink>
        </div>
    }
}
export default Intrudaction;