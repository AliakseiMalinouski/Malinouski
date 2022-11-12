import React from 'react';
import PropTypes from 'prop-types';
import Items from '../components/ItemsComponent';
import Title from '../components/TitleComponent';
import JsonTitle from '../json/title.json';
import JsonIcon from '../json/icon.json';
import Icon from './IconComponent';
import { taprolaEvents } from '../events';

class Taprola extends React.Component {
    static propTypes = {
        array: PropTypes.array.isRequired,
        newItemH: PropTypes.object.isRequired,
    }

    state = {
        array: this.props.array,
        ItemH: this.props.newItemH,
        targetCode: null,
        boolANI: false,
        disabledAddNewItemButton: false,
    }

    newNameValue = null;
    newRemainsValue = null;

    componentDidMount = () => {
        taprolaEvents.addListener('ECheckedItem', this.Selected);
        taprolaEvents.addListener('EDeleteItem', this.Delete);
    }


    componentWillUnmount = () => {
        taprolaEvents.removeListener('ECheckedItem', this.Selected);
        taprolaEvents.removeListener('EDeleteItem', this.Delete);
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
        let answer = confirm('You have selected a product ' + code + 'are you sure you want to remove it?');
        let newArrayItems = this.state.array.filter(item => {
            return item.code !== code;
        });
        answer ? this.setState({ array: newArrayItems }) : this.setState({ targetCode: null });
    }

    createFormAddNewItem = (EO) => {
        this.setState({ boolANI: true });
        this.state.ItemH.code = this.state.array.slice(-1).pop().code + 1;
    }

    addNameNewItem = (EO) => {
        let valueOfNewName = EO.target.value;
        this.state.ItemH.name = valueOfNewName;
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
    }

    render() {
        let items = this.state.array.map(e =>
            <Items
                key={e.code}
                name={e.name}
                remains={e.remains}
                code={e.code}
                iconWasteUrl={e.iconWasteUrl}
                cbSelected={this.Selected}
                cbDelete={this.Delete}
                targetCode={this.state.targetCode}
            />    
        )
        return <div className='WrapperItems'>
            {
                (this.state.boolANI)                
                    ?
                    <div>
                        <Icon iconUrl={JsonIcon} />
                        <Title title={JsonTitle} />
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
                                    <button className='ButtonAddNewItem' type='button'>Add</button>
                                    :
                                    <button className='ButtonAddNewItem' type='button' disabled>Add</button>
                            }
                        </div>
                    </div>
                    :
                    <div>
                        <Icon iconUrl={JsonIcon} />
                        <Title title={JsonTitle} />
                        <span className='Name'>Name: </span><span className='Quanlity'>Quanlity: </span>
                        <div>{items}</div>
                        <button type='button' onClick={this.createFormAddNewItem} className='ButtonCreateFormNewItem'>Add new item</button>
                    </div>
            }
        </div>
    }
}
export default Taprola;

                