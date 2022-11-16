import React from 'react';
import PropTypes from 'prop-types';
import Items from '../components/ItemsComponent';
import Title from '../components/TitleComponent';
import JsonTitle from '../json/title.json';
import JsonIcon from '../json/icon.json';
import Icon from './IconComponent';
import { taprolaEvents } from '../events';
import { withBGHoc } from './withColorBackground';
import ChangeColorIcon from '../json/icon-change-color.json';
import Color from './ChangeColorIcon';

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
        disabledAddNewItemButton: false,
        colorClicked: false,
        valueColorInput: null,
        valueColorInputPrev: null,
        boolEI: false,
    }

    newNameValue = null;
    newRemainsValue = null;

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
    }

    Delete = (code) => {
        let answer = confirm('You have selected a product ' + code + ' are you sure you want to remove it?');
        let newArrayItems = this.state.array.filter(item => {
            return item.code !== code;
        });
        answer ? this.setState({ array: newArrayItems }) : this.setState({ targetCode: null });
    }

    createFormAddNewItem = (EO) => {
        this.setState({ boolANI: true });
        this.setState({ ItemH: {} });
    }

    addNameNewItem = (EO) => {
        let valueOfNewName = EO.target.value;
        this.state.ItemH.name = valueOfNewName;
        this.state.ItemH.code = this.state.array.slice(-1).pop().code + 1;
    }

    addNewRemainsItem = (EO) => {
        let valueOfNewRemains = EO.target.value;
        this.state.ItemH.remains = valueOfNewRemains;
    }

    validAll = () => {
        if (this.newNameValue && this.newRemainsValue) {
            if (this.newNameValue.value && this.newRemainsValue.value) {
                this.setState({ disabledAddNewItemButton: true });
            }
            else {
                this.setState({ disabledAddNewItemButton: false })
            }
        }
        this.state.ItemH.iconWasteUrl = './img/waste.png';
    }

    addNewItem = (EO) => {
        this.setState({ array: this.state.array.concat(this.state.ItemH) });
        this.setState({ boolANI: false });
        this.setState({ disabledAddNewItemButton: false });
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
                                    <button className='ButtonAddNewItem' type='button' onClick={this.addNewItem}>Add</button>
                                    :
                                    <button className='ButtonAddNewItem' type='button' disabled>Add</button>
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
                        
                    </div>
            </div>
        }
        else if (this.state.boolANI == false) {
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
                    <button type='button' onClick={this.createFormAddNewItem} className='ButtonCreateFormNewItem'>Add new item</button>
                    {
                        (this.state.targetCode !== null)
                            ?
                            <button type='button' className='EditItemButton' onClick={this.startEditItem}>Edit Item</button>
                            :
                            <button type='button' className='EditItemButton' disabled>Edit Item</button>
                    }   
                    </div>
            </div>
        }
    }
}
export default Taprola;

                