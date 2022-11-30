import React from 'react';
import PropTypes from 'prop-types';

class Favourite extends React.PureComponent {

    static propTypes = {
        name: PropTypes.string.isRequired,
        images: PropTypes.array.isRequired,
        code: PropTypes.number.isRequired,
        className: PropTypes.string.isRequired,
        targetCode: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        anim: PropTypes.string.isRequired,
    }

    render() {
        return <div style={{backgroundColor: 'white', borderRadius: '10px', width: '500px'}} className={this.props.className} >
                <img className='FirstImage' src={this.props.images[0]} alt='Image' />
                <div>
                    <img src={this.props.images[1]} alt='Image' />
                    <img src={this.props.images[2]} alt='Image' />
                    <h3>{this.props.name}</h3>
                </div>
            </div>
    }
}
export default Favourite;