import React from 'react';
import PropTypes, { element } from 'prop-types';
import Items from '../components/ItemsComponent';
import Title from '../components/TitleComponent';
import JsonTitle from '../json/title.json';
import JsonIcon from '../json/icon.json';
import Icon from './IconComponent';
import { taprolaEvents } from '../events';
import { withBGHoc } from './withColorBackground';
import ChangeColorIcon from '../json/icon-change-color.json';
import Color from './ChangeColorIcon';
import IconBack from '../json/icon-back.json';
import { NavLink } from 'react-router-dom';
import OptionsIcon from '../json/icon-options.json';
import LanguageIcon from '../json/icon-language.json';
import { withTranslation } from 'react-i18next';

class Taprola extends React.PureComponent {
    static propTypes = {
        array: PropTypes.array.isRequired,
        newItemH: PropTypes.object.isRequired,
        arrayColors: PropTypes.array.isRequired,
    }

    state = {
        array: this.props.array,
        ItemH: this.props.newItemH,
        targetCode: null,
        boolANI: false,
        disabledAddNewItemButton: true,
        colorClicked: false,
        valueColorInput: null,
        valueColorInputPrev: null,
        boolEI: false,
        editedName: null,
        editedRemains: null,
        activeCheckboxEditingItem: true,
        activeAddNewItemButton: false,
        heigthOfApp: 500,
        isLanguage: false,
    }

    newNameValue = null;
    newRemainsValue = null;

    setEN = () => {
        this.props.i18n.changeLanguage("en");
        // this.setState({ isLanguage: false });
    }

    setRU = () => {
        this.props.i18n.changeLanguage("ru");
        // this.setState({ isLanguage: false });
    }

    setLanguage = (EO) => {
        this.setState({ isLanguage: true });
        this.setState({ heigthOfApp: this.state.heigthOfApp + 70 });
        this.setState({ activeAddNewItemButton: true });
    }

    componentDidMount = () => {
        taprolaEvents.addListener('ECheckedItem', this.Selected);
        taprolaEvents.addListener('EDeleteItem', this.Delete);
        taprolaEvents.addListener('changeBackgroundColorTitle', this.changeBackgroundColorTitle);
    }

    componentWillUnmount = () => {
        taprolaEvents.removeListener('ECheckedItem', this.Selected);
        taprolaEvents.removeListener('EDeleteItem', this.Delete);
        taprolaEvents.removeListener('changeBackgroundColorTitle', this.changeBackgroundColorTitle);
    }

    LinkNewName = (ref) => {
        this.newNameValue = ref;
    }

    LinkNewRemains = (ref) => {
        this.newRemainsValue = ref;
    }

    Selected = (code) => {
        this.setState({ targetCode: code });
        this.setState({ activeAddNewItemButton: true });
    }

    Delete = (code) => {
        let answer = confirm('You have selected a product ' + code + ' are you sure you want to remove it?');
        let newArrayItems = this.state.array.filter(item => {
            return item.code !== code;
        });
        answer ? this.setState({ array: newArrayItems }) : this.setState({ targetCode: null });
        this.setState({ heigthOfApp: this.state.heigthOfApp - 70 });
    }

    createFormAddNewItem = (EO) => {
        this.setState({ boolANI: true });
        this.setState({ ItemH: {code: 0} });
    }

    addNameNewItem = (EO) => {
        let valueOfNewName = EO.target.value;
        if (valueOfNewName == null || valueOfNewName == '') {
            this.setState({ disabledAddNewItemButton: true });
        }
        else if (valueOfNewName && this.newRemainsValue.value) {
            this.setState({ disabledAddNewItemButton: false });
        }
        this.state.ItemH.name = valueOfNewName;
        (!this.state.array.length) ? null : this.state.ItemH.code = this.state.array.slice(-1).pop().code + 1;
    }

    addNewRemainsItem = (EO) => {
        let valueOfNewRemains = EO.target.value;
        if (valueOfNewRemains == null || valueOfNewRemains == '') {
            this.setState({ disabledAddNewItemButton: true });
        }
        else if (valueOfNewRemains && this.newNameValue.value) {
            this.setState({ disabledAddNewItemButton: false });
        }
        this.state.ItemH.remains = valueOfNewRemains;
    }

    validAll = () => {
        if (this.newNameValue && this.newRemainsValue) {
            if (this.newNameValue.value && this.newRemainsValue.value) {
                this.setState({ disabledAddNewItemButton: false });
            }
            else {
                this.setState({ disabledAddNewItemButton: true });
            }
        }
        this.state.ItemH.iconWasteUrl = './img/waste.png';
    }

    addNewItem = (EO) => {
        this.setState({ array: this.state.array.concat(this.state.ItemH) });
        this.setState({ boolANI: false });
        this.setState({ disabledAddNewItemButton: true });
        this.setState({ heigthOfApp: this.state.heigthOfApp + 70 });
    }

    changeBackgroundColorTitle = () => {
        this.setState({ colorClicked: true });
    }

    readColor = (EO) => {
        let value = EO.target.value;
        this.setState({ valueColorInputPrev: value });
    }

    changeColorTitle = (EO) => {
        let newColor = this.props.arrayColors.filter(element => {
            return element == this.state.valueColorInputPrev
        });
        if (newColor !== null) {
            this.setState({ valueColorInput: newColor });
            this.setState({ colorClicked: false });
        }
        else {
            null
        }
    }

    startEditItem = (EO) => {
        this.setState({ boolEI: true });
    }

    EditNameItem = (EO) => {
        let newName = EO.target.value;
        if (newName == null || newName == '') {
            this.setState({ activeCheckboxEditingItem: true });
        }
        else if (newName && this.state.editedRemains) {
            this.setState({ activeCheckboxEditingItem: false });
        }
        this.setState({ editedName: newName });
    }

    EditRemainsItem = (EO) => {
        let newRemains = EO.target.value;
        if (newRemains == null || newRemains == '') {
            this.setState({ activeCheckboxEditingItem: true });
        }
        else if (newRemains && this.state.editedName) {
            this.setState({ activeCheckboxEditingItem: false });
        }
        this.setState({ editedRemains: newRemains });
    }

    validEditInfo = (EO) => {
        if ((this.state.editedName == null || this.state.editedName == '') && (this.state.editedRemains == null || this.state.editedRemains == '')) {
            this.setState({ activeCheckboxEditingItem: true });
        }
        else {
            this.setState({ activeCheckboxEditingItem: false });
        }
    }

    EditSelectedItem = (EO) => {
        let cloneItemsArray = [...this.state.array];
        cloneItemsArray.forEach((element, index) => {
            if (element.code == this.state.targetCode) {
                let selectedItem={...element}; 
                selectedItem.name = this.state.editedName;
                selectedItem.remains = this.state.editedRemains;
                cloneItemsArray[index] = selectedItem;
            }
        });
        this.setState({ array: cloneItemsArray });
        this.setState({ boolEI: false });
        this.setState({ targetCode: null });
        this.setState({ activeAddNewItemButton: false });
    }

    render() {
        let items = this.state.array.map(e =>
            <Items
                key={e.code}
                name={e.name}
                remains={JSON.parse(e.remains)}
                code={e.code}
                iconWasteUrl={e.iconWasteUrl}
                cbSelected={this.Selected}
                cbDelete={this.Delete}
                targetCode={this.state.targetCode}
            />    
        )

        let TitleWithBG = withBGHoc(this.state.valueColorInput)(Title);
    
        
        if (this.state.boolANI) {
            return <div className='WrapperItems'>
                <div>
                        <Color iconUrl={ChangeColorIcon} />
                        <Icon iconUrl={JsonIcon} />
                        {
                            (this.state.colorClicked) ?
                                <div className='ColorInputDiv'>
                                    <input type='text' placeholder='Color name' onChange={this.readColor}/>
                                    <button type='button' onClick={this.changeColorTitle}>Change</button>
                                </div>
                                : null
                        }
                        <TitleWithBG title={JsonTitle} />
                        <span className='Name'>Name: </span><span className='Quanlity'>Quanlity: </span>
                        <div>{items}</div>
                        <div className='WrapFormNewItem'>
                            <h3 className='TitleNewItem'>Fill in the fields</h3>
                            <span>Name item's</span>
                            <input type='text' className='InputNewItem' onChange={this.addNameNewItem} ref={this.LinkNewName} />
                            <span>Remains item's</span>
                            <input type='number' className='InputNewItem' onChange={this.addNewRemainsItem} ref={this.LinkNewRemains} />
                            <input type='checkbox' onClick={this.validAll} style={{marginRight: '15px'}} /><span>The data entered is correct </span>
                            {
                                (this.state.disabledAddNewItemButton) 
                                    ?
                                    <button className='ButtonAddNewItem' type='button' disabled>Add</button>
                                :
                                    <button className='ButtonAddNewItem' type='button' onClick={this.addNewItem}>Add</button>
                            }
                        </div>
                    </div>
            </div>
        }
        if (this.state.boolEI) {
            return <div className='WrapperItems'>
                <div>
                    <Color iconUrl={ChangeColorIcon} />
                    <Icon iconUrl={JsonIcon} />
                    {
                        (this.state.colorClicked) ?
                            <div className='ColorInputDiv'>
                                <input type='text' placeholder='Color name' onChange={this.readColor}/>
                                <button type='button' onClick={this.changeColorTitle}>Change</button>
                            </div>
                            : null
                    }
                    <TitleWithBG title={JsonTitle} />
                    <span className='Name'>Name: </span><span className='Quanlity'>Quanlity: </span>
                    <div>{items}</div>
                    <div className='WrapEditing'>
                        <h3 className='TitleEditingItem'>Editing item</h3>
                        <input type='text' className='EditingNameItem' placeholder='name' onChange={this.EditNameItem}/>
                        <input type='number' className='EditingRemainsItem' placeholder='remains' onChange={this.EditRemainsItem} />
                        <input type='checkbox' onClick={this.validEditInfo}/><span style={{marginLeft: '15px'}}>The data entered is correct </span>
                        {
                            (this.state.activeCheckboxEditingItem)
                                ?
                                <button type='button' onClick={this.EditSelectedItem} className='PushEditButton' disabled>Edit</button>
                                :
                                <button type='button' onClick={this.EditSelectedItem} className='PushEditButton'>Edit</button>
                        }
                    </div>
                    </div>
            </div>
        }
        else if (this.state.boolANI == false || this.state.boolEI) {
            return <div className='WrapperItems' style={{height: this.state.heigthOfApp}}>
                <div>
                        <Color iconUrl={ChangeColorIcon} />
                        <Icon iconUrl={JsonIcon} />
                        {
                            (this.state.colorClicked) ?
                                <div className='ColorInputDiv'>
                                    <input type='text' placeholder='Color name' onChange={this.readColor}/>
                                    <button type='button' onClick={this.changeColorTitle}>Change</button>
                                </div>
                                : null
                        }
                        <TitleWithBG title={JsonTitle} />
                        <span className='Name'>Name: </span><span className='Quanlity'>Quanlity: </span>
                        <div>{items}</div>
                        {
                            (this.state.activeAddNewItemButton) 
                            ?
                            <button type='button' onClick={this.createFormAddNewItem} disabled className='ButtonCreateFormNewItem'>{this.props.t("add-new-item")}</button>
                            :
                            <button type='button' onClick={this.createFormAddNewItem} className='ButtonCreateFormNewItem'>{this.props.t("add-new-item")}</button>
                        }
                    {
                        (this.state.targetCode !== null)
                            ?
                            <button type='button' className='EditItemButton' onClick={this.startEditItem}>Edit Item</button>
                            :
                            <button type='button' className='EditItemButton' disabled>Edit Item</button>
                    }
                    <NavLink to="/"><img src={IconBack} className='ButtonrReturnToIntrudaction'/></NavLink>
                    <NavLink to="/options"><img src={OptionsIcon} className='ButtonGoToOptions' /></NavLink>
                    <img onClick={this.setLanguage} className="LanguageButton" src={LanguageIcon} alt='Language' />
                    {
                        (this.state.isLanguage) 
                            ?
                        <div className='LanguageButtons'>
                            <button className='EN' type='button' onClick={this.setEN}>EN</button>
                            <button className='RU' type='button' onClick={this.setRU}>RU</button>
                        </div>
                            :
                        null
                    }
                    </div>
            </div>
        }
    }
}
export default withTranslation() (Taprola);

                