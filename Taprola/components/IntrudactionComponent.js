import React, { PureComponent } from 'react';
import PropTypes, { element } from 'prop-types';
import { NavLink } from 'react-router-dom';
import CreateIcon from '../json/icon-create.json';
import BucketIcon from '../json/icon-bucket.json';
import IconEdit from '../json/icon-edit.json';
import IconPallete from '../json/icon-pallete.json';
import MenuIcon from '../json/menu-icon.json';
import LanguageIcon from '../json/icon-language.json';
import OptionsIcon from '../json/icon-options.json';
import SendIcon from '../json/send-icon.json';

class Intrudaction extends PureComponent {
    
    render() {
        return <div className='WrapperWelcomeAlert'>
            <h2 className='TitleWelcome'>Meet the Taprola!</h2>
            <h4 className='UnderTitleMakeItEasy'><img src={CreateIcon} alt='Pencil' /> Make it easy</h4>
            <p className='ParagraphAboutCreate'>To create a element, simply click on the "Add new item" button</p>
            <h4 className='UnderTitleEdit'><img src={IconEdit} alt='Arrows' /> Change it</h4>
            <p className='ParagraphAboutEdit'>To change element information, click on the "Edit item" button</p>
            <h4 className='UnderTitleMakeItEasy'><img src={BucketIcon} alt='Pencil' /> Delete it easy</h4>
            <p className='ParagraphAboutCreate'>To delete an item, press the "bucket" button</p>
            <h4 className='UnderTitlePalette'><img src={IconPallete} /> A varied palette</h4>
            <p className='ParagraphAboutPallete'>To change the colour of the header, click on the "colour palette" button</p>
            <h4 className='UnderTitlePalette'><img src={MenuIcon} /> Different categories</h4>
            <p className='ParagraphAboutPallete'>Before you start with Taprola, familiarise yourself with the categories, click on "Categories" to do so</p>
            <h4 className='UnderTitlePalette'><img src={LanguageIcon} /> Change the language</h4>
            <p className='ParagraphAboutPallete'>To change the language, press the "Planets" button</p>
            <h4 className='UnderTitlePalette'><img src={SendIcon} /> Ask a question</h4>
            <p className='ParagraphAboutPallete'>To ask us a question, click on the "Letter" button</p>
            <h4 className='UnderTitlePalette'><img src={OptionsIcon} /> Options</h4>
            <p className='ParagraphAboutPallete'>To access the settings, press the "Gears" button</p>
            <NavLink className='ButtonStartWork' to="/taprola">Get to work</NavLink>
        </div>
    }
}
export default Intrudaction;