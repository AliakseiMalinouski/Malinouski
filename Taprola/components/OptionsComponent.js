import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MobileIcon from '../json/icon-modileopt.json';
import LanguageIcon from '../json/icon-language.json';

class Options extends React.PureComponent {
    static propTypes = {
        
    }

    state = {
        isLanguage: false
    }

    setLanguage = (EO) => {
        this.setState({isLanguage: true})
    }

    render() {
        return <div className='WrapperOptions'>
            <div className='Illustration'>
            <h3>Remember<br/> <span>more</span></h3>
                <img src={MobileIcon} alt="Smartphone" />
            </div>
            <div className='WrapperCatigories'>
                <div onClick={this.setLanguage} style={{ display: 'flex', alignItems: 'center' }}><img style={{ width: '40px', height: '40px', marginRight: '15px' }} src={LanguageIcon} />Language</div>
                {
                    (this.state.isLanguage) 
                        ?
                    <div className='LanguageButtons'>
                        <button>EN</button>
                        <button>RU</button>
                    </div>
                        :
                    null
                }
            </div>
        </div>
    }
}
export default Options;