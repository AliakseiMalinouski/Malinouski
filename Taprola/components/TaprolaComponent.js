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
    }

    state = {
        array: this.props.array,
        targetCode: null,
    }

    componentDidMount = () => {
        taprolaEvents.addListener('ECheckedItem', this.Selected);
        taprolaEvents.addListener('EDeleteItem', this.Delete);
    }


    componentWillUnmount = () => {
        taprolaEvents.removeListener('ECheckedItem', this.Selected);
        taprolaEvents.removeListener('EDeleteItem', this.Delete);
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
            <Icon
                iconUrl={JsonIcon}
            />
            <Title
                title={JsonTitle}
            />
            <span className='Name'>Name: </span><span className='Quanlity'>Quanlity: </span>
            <div>{items}</div>
        </div>
    }
}
export default Taprola;