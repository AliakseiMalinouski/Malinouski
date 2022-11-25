import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MobileIcon from '../json/icon-modileopt.json';
import QuestionIcon from '../json/icon-language.json';
import "babel-polyfill";


class Options extends React.PureComponent {
    static propTypes = {
        
    }

    state = {
        dataSuccess: false,
        dataLoaded: '',
    }


    getData = (EO) => {
        this.loadData();
    }

    loadData = async () => {
        const response = fetch("https://gist.githubusercontent.com/AliakseiMalinouski/016f07f7089b473b85b5f52e5f1c1359/raw/1adf79dda4698742b784146795f1fbb218958c61/TaprolaTestingGist",
        {
            method: 'get'    
        }
        )
        if (!response.ok) {
            alert('Error')
        }
        else {
            const data = await response.json();
            console.log(data)
        }
    }


    render() {
        return <div className='WrapperOptions'>
            <div className='Illustration'>
            <h3>Remember<br/> <span>more</span></h3>
                <img src={MobileIcon} alt="Smartphone" />
            </div>
            <div className='WrapperCatigories'>
                <div onClick={this.getData} className='AboutTaprola'><img style={{ width: '40px', height: '40px', marginRight: '15px' }} src={QuestionIcon} />About Taprola</div>

            </div>
        </div>
    }
}
export default Options;