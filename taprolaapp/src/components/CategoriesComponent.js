import React from 'react';
import PropTypes from 'prop-types';
import { taprolaEvents } from '../events';

class Categories extends React.PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        images: PropTypes.array.isRequired,
        code: PropTypes.number.isRequired,
        className: PropTypes.string.isRequired,
        targetCode: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        anim: PropTypes.string.isRequired,
    }

    Selected = (EO) => {
        taprolaEvents.emit('cbSelected', this.props.code);
    }

    CloseCategory = (EO) => {
        taprolaEvents.emit('cbCloseCategory', this.props.code);
        EO.stopPropagation();
    }


    render() {
        if (this.props.targetCode == this.props.code) {
            return <div className='Categories ClosedAnimationCategory' onClick={this.Selected}>
            <div style={{backgroundColor: '#87CEEB', borderRadius: '10px', width: '500px', transition: '1s', height: '582px'}} className={this.props.className}>
                    <h3>{this.props.name}</h3>
                    <p className='InfoParagraph'>{this.props.description}</p>
                    <button type='button' onClick={this.CloseCategory}>close</button>
            </div>
        </div>
        }
        else {
            return <div className='Categories' onClick={this.Selected}>
            <div style={{backgroundColor: 'white', borderRadius: '10px', width: '500px'}} className={this.props.className} >
                <img className='FirstImage' src={this.props.images[0]} alt='Image' />
                <div>
                    <img src={this.props.images[1]} alt='Image' />
                    <img src={this.props.images[2]} alt='Image' />
                    <h3>{this.props.name}</h3>
                </div>
            </div>
        </div>
        }
    }
}
export default Categories;