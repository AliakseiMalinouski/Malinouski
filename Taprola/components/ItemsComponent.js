import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class Items extends React.Component {
    static propTypes = {
        code: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        remains: PropTypes.number.isRequired,
        cbSelected: PropTypes.func.isRequired,
    }

    checkedItem = (EO) => {
        if (this.props.cbSelected) {
            this.props.cbSelected(this.props.code);
        }
    }

    render() {
        return <div>
            {
                (this.props.code == this.props.targetCode) 
                    ?
                <div className='Item'>
                    <span style={{backgroundColor: 'red'}} onClick={this.checkedItem}>{this.props.name}</span>
                    <span style={{marginLeft: '45px'}}>{this.props.remains}</span>
                </div>
                    :
                <div className='Item'>
                    <span onClick={this.checkedItem}>{this.props.name}</span>
                    <span style={{marginLeft: '45px'}}>{this.props.remains}</span>
                </div>
            }
        </div>
    }
}
export default Items;
