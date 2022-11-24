import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MobileIcon from '../json/icon-modileopt.json';
import LanguageIcon from '../json/icon-language.json';

class Options extends React.PureComponent {
    static propTypes = {
        
    }

    state = {
        
    }


    render() {
        return <div className='WrapperOptions'>
            <div className='Illustration'>
            <h3>Remember<br/> <span>more</span></h3>
                <img src={MobileIcon} alt="Smartphone" />
            </div>
            <div className='WrapperCatigories'>
                <div style={{ display: 'flex', alignItems: 'center' }}><img style={{ width: '40px', height: '40px', marginRight: '15px' }} src={LanguageIcon} />ggg</div>
            </div>
        </div>
    }
}
export default Options;