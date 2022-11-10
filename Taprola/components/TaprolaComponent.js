import React from 'react';
import PropTypes from 'prop-types';
import Items from '../components/ItemsComponent';
import Title from '../components/TitleComponent';
import JsonTitle from '../json/title.json';
import JsonIcon from '../json/icon.json';
import Icon from './IconComponent';

class Taprola extends React.Component {
    static propTypes = {
        array: PropTypes.array.isRequired,
    }

    state = {
        array: this.props.array,
        targetCode: null,
    }

    Selected = (code) => {
        this.setState({ targetCode: code });
    }

    render() {
        let items = this.state.array.map(e =>
            <Items
                key={e.code}
                name={e.name}
                remains={e.remains}
                code={e.code}
                cbSelected={this.Selected}
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