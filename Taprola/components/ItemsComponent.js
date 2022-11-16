import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { taprolaEvents } from '../events';


class Items extends React.PureComponent {
    static propTypes = {
        code: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        remains: PropTypes.number.isRequired,
        iconWasteUrl: PropTypes.string.isRequired,
        cbSelected: PropTypes.func.isRequired,
        cbDelete: PropTypes.func.isRequired,
    }

    СheckedItem = (EO) => {
        if (this.props.cbSelected) {
            taprolaEvents.emit('ECheckedItem', this.props.code);
        }
    }

    DeleteItem = (EO) => {
        if (this.props.cbDelete) {
            taprolaEvents.emit('EDeleteItem', this.props.code);
            EO.stopPropagation();
        }

    }

    render() {
        return <div>
            {
                (this.props.code == this.props.targetCode) 
                    ?
                <div className='Item'>
                    <div onClick={this.СheckedItem} style={{backgroundColor: '#00CED1',}} className='ItemChoice AnimationItemChoice'>{this.props.name}</div>
                    <div style={{ marginLeft: '45px' }} className='Remains'>{this.props.remains}</div>
                    <div className='WrapIconWaste'><img onClick={this.DeleteItem} style={{width: '25px', heigth: '25px', position: 'absolute', right: '15px', cursor: 'pointer'}} src={this.props.iconWasteUrl} alt='Icon waste'/></div>
                </div>
                    :
                <div className='Item'>
                    <div onClick={this.СheckedItem} className='ItemChoice'>{this.props.name}</div>
                    <div style={{ marginLeft: '45px' }} className='Remains'>{this.props.remains}</div>
                    <div className='WrapIconWaste'><img onClick={this.DeleteItem} style={{width: '25px', heigth: '25px', position: 'absolute', right: '15px', cursor: 'pointer'}} src={this.props.iconWasteUrl} alt='Icon waste'/></div>
                </div>
            }
        </div>
    }
}
export default Items;
