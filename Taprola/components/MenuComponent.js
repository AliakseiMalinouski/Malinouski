import React from 'react';
import PropTypes from 'prop-types';
import Categories from './CategoriesComponent';
import { NavLink } from 'react-router-dom';
import { taprolaEvents } from '../events';
import BackToTaprolaIcon from '../json/icon-backtotaprolafromcategory.json';
import { Guide } from './GuideComponent';
import { send } from 'emailjs-com';

class Menu extends React.PureComponent {

    static propTypes = {
        array: PropTypes.array.isRequired,
        isLoad: PropTypes.bool.isRequired,
    }

    
    state = {
        searchValue: "",
        targetCode: null,
        closeAnim: "",
        isClassNameTitle: false,
        toSend: {
            question: '',
            email: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
            send(
            'service_4j7xlzd',
            'template_m50k0zj',
            this.state.toSend,
            'TEEd-8_0HXteJTfo6'
            )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
        }

    handleChange = (e) => {
        this.setState({toSend: {...this.state.toSend, [e.target.name]: e.target.value}})
    }

    componentDidMount = () => {
        taprolaEvents.addListener('cbSelected', this.Selected);
        taprolaEvents.addListener('cbCloseCategory', this.CompleteCloseCategory);
        taprolaEvents.addListener('HoverDiscover', this.setClassTitle);
        taprolaEvents.addListener('UnHoverDiscover', this.unClassTitle);
    }

    componentWillUnmount = () => {
        taprolaEvents.removeListener('cbSelected', this.Selected);
        taprolaEvents.removeListener('cbCloseCategory', this.CompleteCloseCategory);
        taprolaEvents.removeListener('HoverDiscover', this.setClassTitle);
        taprolaEvents.removeListener('UnHoverDiscover', this.unClassTitle);
    }

    Selected = (code) => {
        this.setState({ targetCode: code });
    }

    CompleteCloseCategory = (code) => {
        this.setState({ targetCode: null });
        this.setState({ closeAnim: "ClosedAnimationCategory" });
    }

    setClassTitle = (workMode) => {
        if(workMode == 1) this.setState({ isClassNameTitle: true });
    }

    unClassTitle = (workMode) => {
        if(workMode == 2) this.setState({ isClassNameTitle: false });
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
        }).map(e => <Categories key={e.code} name={e.name} images={e.photos} code={e.code} className={e.className} targetCode={this.state.targetCode == null ? 0 : this.state.targetCode} description={e.description} anim={this.state.closeAnim} />)
            return <div className='WrapperMenu'>
            <div>
                <Guide/>
            </div>
            <h2 className={(!this.state.isClassNameTitle ? 'TitleCategory' : 'AnimTitle')}>Your categories</h2>
            <input className='search' type='text' placeholder='category' value={this.state.searchValue} onChange={this.setSearchValue} />
            <div className='WrapperCategories' >
                {categories}
                </div>
                <div className='FormEmail'>
                    <form onSubmit={this.onSubmit}>
                        <input type='text' name='question' placeholder='question' value={this.state.toSend.question} onChange={this.handleChange} />
                        <input type='text' name='email' placeholder='email' value={this.state.toSend.email} onChange={this.handleChange} />
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            <NavLink to="/taprola"><img className='BackToTaprolaImageButton' src={BackToTaprolaIcon} alt='Return image'/></NavLink>
        </div>
    }
}
export default Menu;
