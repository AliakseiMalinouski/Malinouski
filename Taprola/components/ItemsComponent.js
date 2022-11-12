import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';



class Items extends React.Component {
    static propTypes = {
        code: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        remains: PropTypes.number.isRequired,
        iconWasteUrl: PropTypes.string.isRequired,
        cbSelected: PropTypes.func.isRequired,
        cbDelete: PropTypes.func.isRequired,
    }

    checkedItem = (EO) => {
        if (this.props.cbSelected) {
            this.props.cbSelected(this.props.code);
        }
    }

    deleteItem = (EO) => {
        if (this.props.cbDelete) {
            this.props.cbDelete(this.props.code);
        }
    }

    render() {
        return <div>
            {
                (this.props.code == this.props.targetCode) 
                    ?
                <div className='Item'>
                    <div onClick={this.checkedItem} style={{backgroundColor: 'red'}} className='ItemChoice AnimationItemChoice'>{this.props.name}</div>
                    <div style={{ marginLeft: '45px' }} className='Remains'>{this.props.remains}</div>
                    <div className='WrapIconWaste'><img style={{width: '25px', heigth: '25px', position: 'absolute', right: '15px', cursor: 'pointer'}} src={this.props.iconWasteUrl} alt='Icon waste'/></div>
                </div>
                    :
                <div className='Item'>
                    <div onClick={this.checkedItem} className='ItemChoice'>{this.props.name}</div>
                    <div style={{ marginLeft: '45px' }} className='Remains'>{this.props.remains}</div>
                    <div className='WrapIconWaste'><img onClick={this.deleteItem} style={{width: '25px', heigth: '25px', position: 'absolute', right: '15px', cursor: 'pointer'}} src={this.props.iconWasteUrl} alt='Icon waste'/></div>
                </div>
            }
        </div>
    }
}
export default Items;
