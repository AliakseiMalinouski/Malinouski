import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Title extends React.PureComponent{
    static propTypes = {
        title: PropTypes.string.isRequired,
    }

    state = {
        title: this.props.title,
    }

    render() {
        return <h1 className='Title'>
            {this.state.title}
        </h1>
    }
}
export default Title;