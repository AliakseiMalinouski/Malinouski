import React from 'react';
import PropTypes from 'prop-types';
import Categories from './CategoriesComponent';
import { NavLink } from 'react-router-dom';

class Menu extends React.PureComponent {


    static propTypes = {
        array: PropTypes.array.isRequired
    }

    render() {
        let categories = this.props.array.map(e => 
            <Categories key={e.code} name={e.name} images={e.photos} code={e.code} className={e.className} />
            )
        return <div className='WrapperMenu'>
            <h2 className='Title'>Your categories</h2>
            <div className='WrapperCategories' >
                {categories}
            </div>
            <NavLink to="/taprola">Back</NavLink>
        </div>
    }
}
export default Menu;