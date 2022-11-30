import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Categories from './CategoriesComponent';
import { NavLink } from 'react-router-dom';
import { taprolaEvents } from '../events';
import BackToTaprolaIcon from '../json/icon-backtotaprolafromcategory.json';
import Favourite from './FavouriteComponent';



class Menu extends React.PureComponent {

    static propTypes = {
        array: PropTypes.array.isRequired,
    }

    
    state = {
        searchValue: "",
        targetCode: null,
        closeAnim: "",
        favourite: [],
        workMode: false,
    }

    componentDidMount = () => {
        taprolaEvents.addListener('cbSelected', this.Selected);
        taprolaEvents.addListener('cbCloseCategory', this.CompleteCloseCategory);
    }

    componentWillUnmount = () => {
        taprolaEvents.removeListener('cbSelected', this.Selected);
        taprolaEvents.removeListener('cbCloseCategory', this.CompleteCloseCategory);
    }

    Selected = (code) => {
        this.setState({ targetCode: code });
        let favouriteCards = this.props.array.filter(element => {
            return element.code == code;
        });
        this.setState({ favourite: this.state.favourite.concat(favouriteCards) });
    }

    CompleteCloseCategory = (code) => {
        this.setState({ targetCode: null });
        this.setState({ closeAnim: "ClosedAnimationCategory" });
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

    goToFavourite = () => {
        this.setState({ workMode: true });
    }

    render() {
        console.log(this.state.favourite)
        let categories = this.props.array.filter(element => {
                return element.name.toLowerCase().includes(this.state.searchValue.toLowerCase());
        }).map(e => <Categories key={e.code} name={e.name} images={e.photos} code={e.code} className={e.className} targetCode={this.state.targetCode == null ? 0 : this.state.targetCode} description={e.description} anim={this.state.closeAnim} />)
        let favourite = this.state.favourite.map(e => <Favourite key={e.code} name={e.name} images={e.photos} code={e.code} className={e.className}/>)
        if (!this.state.workMode) {
            return <div className='WrapperMenu'>
            <button type='button' onClick={this.goToFavourite}>favourite</button>
            <h2 className='Title'>Your categories</h2>
            <input className='search' type='text' placeholder='category' value={this.state.searchValue} onChange={this.setSearchValue} />
            <div className='WrapperCategories' >
                {categories}
            </div>
            <NavLink to="/taprola"><img className='BackToTaprolaImageButton' src={BackToTaprolaIcon} alt='Return image'/></NavLink>
        </div>
        }
        else {
            return <div className='WrapperMenu'>
            <h2 className='Title'>Your categories</h2>
            <div className='WrapperFavourite'>
                {favourite}
            </div>
        </div>
        }
    }
}
export default Menu;
