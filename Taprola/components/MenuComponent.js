import React from 'react';
import PropTypes from 'prop-types';
import ArrayCategories from '../json/arrayCategories.json';

class Menu extends React.PureComponent {
    render() {
        return <div className='WrapperMenu'>
            <div className='Categories'>
                <Categories  />
            </div>
        </div>
    }
}
export default Menu;