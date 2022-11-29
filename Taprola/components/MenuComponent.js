import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Categories from './CategoriesComponent';
import { NavLink } from 'react-router-dom';
import { taprolaEvents } from '../events';

class Menu extends React.PureComponent {

    static propTypes = {
        array: PropTypes.array.isRequired,
    }

    
    state = {
        searchValue: "",
        targetCode: null,
    }

    componentDidMount = () => {
        taprolaEvents.addListener('cbSelected', this.Selected);
    }

    componentWillUnmount = () => {
        taprolaEvents.removeListener('cbSelected', this.Selected);
    }

    Selected = (code) => {
        console.log(code)
        this.setState({ targetCode: code });
    }

    setSearchValue = (EO) => {
        let value = EO.target.value;
        this.setState({ searchValue: value });
        this.props.array.forEach(element => {
            if (value !== element.name) {
                this.setState({ targetCode: null });
            }
        });
    }



    render() {
        let categories = this.props.array.filter(element => {
                return element.name.toLowerCase().includes(this.state.searchValue.toLowerCase());
        }).map(e => <Categories key={e.code} name={e.name} images={e.photos} code={e.code} className={e.className} targetCode={this.state.targetCode == null ? 0 : this.state.targetCode} description={e.description} />)
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
