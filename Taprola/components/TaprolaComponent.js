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
import MenuIcon from '../json/menu-icon.json';
import { withTranslation } from 'react-i18next';

class Taprola extends React.PureComponent {
    static propTypes = {
        array: PropTypes.array.isRequired,
        newItemH: PropTypes.object.isRequired,
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
        heigthOfApp: 600,
        isLanguage: false,
        arrayColors: null,
    }

    newNameValue = null;
    newRemainsValue = null;

    loadColors = () => {
        fetch("https://gist.githubusercontent.com/AliakseiMalinouski/549591760d65166031248e34f13dedbe/raw/a32210944048380be1ae1246a210c9490fb7039c/ArrayColorsTitleTaprola",
            { method: 'get' })
            .then(response => {
                if (!response.ok) {
                    alert("Error");
                }
                else {
                    return response.json();
                }
            })
            .then(data => {
                console.log(data)
                this.setState({ arrayColors: data });
        })
    }

    setEN = () => {
        this.props.i18n.changeLanguage("en");
        this.setState({ isLanguage: false });
        this.setState({ heigthOfApp: this.state.heigthOfApp - 120 });
        this.setState({ activeAddNewItemButton: false });
    }

    setRU = () => {
        this.props.i18n.changeLanguage("ru");
        this.setState({ isLanguage: false });
        this.setState({ heigthOfApp: this.state.heigthOfApp - 120 });
        this.setState({ activeAddNewItemButton: false });
    }

    setPL = () => {
        this.props.i18n.changeLanguage("pl");
        this.setState({ isLanguage: false });
        this.setState({ heigthOfApp: this.state.heigthOfApp - 120 });
        this.setState({ activeAddNewItemButton: false });
    }

    setLanguage = (EO) => {
        this.setState({ isLanguage: true });
        this.setState({ activeAddNewItemButton: true });
        (this.state.isLanguage) ? null : this.setState({ heigthOfApp: this.state.heigthOfApp + 120 });
    }

    componentDidMount = () => {
        taprolaEvents.addListener('ECheckedItem', this.Selected);
        taprolaEvents.addListener('EDeleteItem', this.Delete);
        taprolaEvents.addListener('changeBackgroundColorTitle', this.changeBackgroundColorTitle);
        this.loadColors();
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
        let newColor = this.state.arrayColors.filter(element => {
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
                                <input type='text' placeholder={this.props.t("color-name")} onChange={this.readColor}/>
                                <button type='button' onClick={this.changeColorTitle}>{this.props.t("change-color")}</button>
                                </div>
                                : null
                        }
                        <TitleWithBG title={JsonTitle} />
                        <span className='Name'>{this.props.t("name-item")}</span><span className='Quanlity'>{this.props.t("quanlity")}</span>
                        <div>{items}</div>
                        <div className='WrapFormNewItem'>
                            <h3 className='TitleNewItem'>{this.props.t("fill-all")}</h3>
                            <span>{this.props.t("name-of-item")}</span>
                            <input type='text' className='InputNewItem' onChange={this.addNameNewItem} ref={this.LinkNewName} />
                            <span>{this.props.t("quanlity-of-item")}</span>
                            <input type='number' className='InputNewItem' onChange={this.addNewRemainsItem} ref={this.LinkNewRemains} />
                            <input type='checkbox' onClick={this.validAll} style={{ marginRight: '15px' }} /><span>{this.props.t("data-correct")}</span>
                            {
                                (this.state.disabledAddNewItemButton) 
                                    ?
                                    <button className='ButtonAddNewItem' type='button' disabled>{this.props.t("add")}</button>
                                :
                                    <button className='ButtonAddNewItem' type='button' onClick={this.addNewItem}>{this.props.t("add")}</button>
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
                                <button type='button' onClick={this.changeColorTitle}>{this.props.t("change-color")}</button>
                            </div>
                            : null
                    }
                    <TitleWithBG title={JsonTitle} />
                    <span className='Name'>{this.props.t("name-item")}</span><span className='Quanlity'>{this.props.t("quanlity")}</span>
                    <div>{items}</div>
                    <div className='WrapEditing'>
                        <h3 className='TitleEditingItem'>{this.props.t("editing-item")}</h3>
                        <input type='text' className='EditingNameItem' placeholder='name' onChange={this.EditNameItem}/>
                        <input type='number' className='EditingRemainsItem' placeholder='remains' onChange={this.EditRemainsItem} />
                        <input type='checkbox' onClick={this.validEditInfo}/><span style={{marginLeft: '15px'}}>{this.props.t("data-correct")}</span>
                        {
                            (this.state.activeCheckboxEditingItem)
                                ?
                                <button type='button' onClick={this.EditSelectedItem} className='PushEditButton' disabled>{this.props.t("edit")}</button>
                                :
                                <button type='button' onClick={this.EditSelectedItem} className='PushEditButton'>{this.props.t("edit")}</button>
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
                                    <input type='text' placeholder={this.props.t("color-name")} onChange={this.readColor}/>
                                    <button type='button' onClick={this.changeColorTitle}>{this.props.t("change-color")}</button>
                                </div>
                                : null
                        }
                        <TitleWithBG title={JsonTitle} />
                    <span className='Name'>{this.props.t("name-item")} </span><span className='Quanlity'>{this.props.t("quanlity")}</span>
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
                            <button type='button' className='EditItemButton' onClick={this.startEditItem}>{this.props.t("edit-item")}</button>
                            :
                            <button type='button' className='EditItemButton' disabled>{this.props.t("edit-item")}</button>
                    }
                    <NavLink to="/"><img src={IconBack} className='ButtonrReturnToIntrudaction'/></NavLink>
                    <NavLink to="/options"><img src={OptionsIcon} className='ButtonGoToOptions' /></NavLink>
                    <img onClick={this.setLanguage} className="LanguageButton" src={LanguageIcon} alt='Language' />
                    <NavLink to="/menu"><img src={MenuIcon} alt='Menu' className='ButtonGoToMenu'/></NavLink>
                    {
                        (this.state.isLanguage) 
                            ?
                        <div className='LanguageButtons'>
                            <button className='EN' type='button' onClick={this.setEN}>EN</button>
                            <button className='RU' type='button' onClick={this.setRU}>RU</button>
                            <button className='RU' type='button' onClick={this.setPL}>PL</button>
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

                