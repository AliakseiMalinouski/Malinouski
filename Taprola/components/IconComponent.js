import React from 'react';
import PropTypes from 'prop-types';

class Icon extends React.PureComponent {
    static propTypes = {
        iconUrl: PropTypes.string.isRequired,
    }

    state = {
        icon: this.props.iconUrl,
    }

    render() {
        return <img className='Icon' src={this.state.icon} alt='A pen' />
    }
}
export default Icon;