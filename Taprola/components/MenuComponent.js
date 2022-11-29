import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Categories from './CategoriesComponent';
import { NavLink } from 'react-router-dom';

class Menu extends React.PureComponent {

    static propTypes = {
        array: PropTypes.array.isRequired
    }

    
    state = {
        searchValue: "",
    }

    setSearchValue = (EO) => {
        let value = EO.target.value;
        this.setState({ searchValue: value });
    }

    render() {
        let categories = this.props.array.filter(element => {
            return element.name.toLowerCase().includes(this.state.searchValue.toLowerCase());
        }).map(e => <Categories key={e.code} name={e.name} images={e.photos} code={e.code} className={e.className} />)
        return <div className='WrapperMenu'>
            <h2 className='Title'>Your categories</h2>
            <input className='search' type='text' placeholder='category' value={this.state.searchValue} onChange={this.setSearchValue} />
            <div className='WrapperCategories' >
                {categories}
            </div>
            <NavLink to="/taprola">Back</NavLink>
        </div>
        
    }
}
export default Menu;
