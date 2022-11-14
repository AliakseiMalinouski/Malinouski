import React from 'react';
import PropTypes from 'prop-types';
import { taprolaEvents } from '../events';

class ChangeColorIcon extends React.Component {
    static propTypes = {
        iconUrl: PropTypes.string.isRequired,
    }

    colorClicked = (EO) => {
        let target = EO.target;
        taprolaEvents.emit('changeBackgroundColorTitle', target);
    }

    render() {
        return <img onClick={this.colorClicked} src={this.props.iconUrl} alt='Color' className='IconChangeColor'/>
    }
}
export default ChangeColorIcon;