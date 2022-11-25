import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MobileIcon from '../json/icon-modileopt.json';
import QuestionIcon from '../json/icon-question.json';
import HowDoThisIcon from '../json/icon-how-do-this.json';
import SmileIcon from '../json/icon-smile.json';


class Options extends React.PureComponent {
    static propTypes = {
        
    }

    state = {
        dataSuccessTaprolaText: false,
        dataLoadedTaprolaText: null,
        dataSuccessHowToUseText: false,
        dataLoadedHowToUseText: null,
    }

    getDataAboutTaprola = () => {
        if (this.state.dataLoadedTaprolaText == null) {
            this.loadTextAboutTaprola();
        }
        else {
            this.fetchSuccessOfTextAboutTaprola(this.state.dataLoadedTaprolaText);
        }
    }

    getDataHowToUse = () => {
        if (this.state.dataLoadedHowToUseText == null) {
            this.loadTextHowToUse();
        }
        else {
            this.fetchSuccessHowToUse(this.state.dataLoadedHowToUseText);
        }
    }



    fetchSuccessOfTextAboutTaprola = (data) => {
        this.setState({
            dataSuccessTaprolaText: true,
            dataLoadedTaprolaText: data,
        });
    }

    fetchErrorOfTextAboutTaprola = (error) => {
        alert(error)
    }

    
    loadTextAboutTaprola = () => {
        fetch("https://gist.githubusercontent.com/AliakseiMalinouski/016f07f7089b473b85b5f52e5f1c1359/raw/1bd236d0577a5892653b9da6757fdea7acbdd330/AboutTaprola",
            { method: 'get' })
            .then(response => {
                if (!response.ok) {
                    alert("error");
            }
                else {
                    return response.text();
            }
            })
            .then(data => {
                this.fetchSuccessOfTextAboutTaprola(data);
            })
            .catch(error => {
                this.fetchErrorOfTextAboutTaprola(error);
        })
    }


    closeDescriptionOfTaprola = (EO) => {
        this.setState({ dataSuccessTaprolaText: false });
    }

    fetchSuccessHowToUse = (data) => {
        this.setState({
            dataSuccessHowToUseText: true,
            dataLoadedHowToUseText: data,
        });
        console.log('функция получила данные и прошли изменения')
    }

    fetchErrorHowToUse = () => {

    }


    loadTextHowToUse = () => {
        fetch("https://gist.githubusercontent.com/AliakseiMalinouski/db6d95bfc04a9213c61ea97bd9d263dc/raw/d266b7318607eb5ce4828e1602da2a886f41f836/HowToUseTaprola",
            { method: 'get' })
            .then(response => {
                if (!response.ok) {
                alert('err')
                }
                else {
                    return response.text();
                }
            })
            .then(data => {
                this.fetchSuccessHowToUse(data);
                console.log('дата принята')
            })
            .catch(error => {
                this.fetchErrorHowToUse(error);
        })
    }


    render() {
        if (this.state.dataSuccessTaprolaText) {
            return <div className='WrapperOptions'>
                <div className='Illustration'>
                    <h3>Remember<br/> <span>more</span></h3>
                    <img src={MobileIcon} alt="Smartphone" />
                </div>
                {
                (this.state.dataLoadedTaprolaText == null)
                    ?
                    <div>Loading...</div>
                    :
                    <div>
                        <p className='AboutTaprolaParagraph'>{this.state.dataLoadedTaprolaText}</p>
                        <div className='OkayButton' onClick={this.closeDescriptionOfTaprola}>Okay</div>
                    </div>
                    }
            </div>
        }
        if (this.state.dataSuccessHowToUseText) {
            return <div className='WrapperOptions'>
                <div className='Illustration'>
                    <h3>Remember<br/> <span>more</span></h3>
                    <img src={MobileIcon} alt="Smartphone" />
                </div>
                {
                    (this.state.dataLoadedHowToUseText == null) 
                        ?
                        <div>...Loading</div>
                        :
                        <div>  
                            <p className='AboutHowToUse'>{this.state.dataLoadedHowToUseText}</p>
                        </div>
                }
            </div>
        }
        else if (!this.state.dataSuccessTaprolaText) {
            return <div className='WrapperOptions'>
            <div className='Illustration'>
            <h3>Remember<br/> <span>more</span></h3>
                <img src={MobileIcon} alt="Smartphone" />
            </div>
            <div className='WrapperCatigories'>
                <div onClick={this.getDataAboutTaprola} className='AboutTaprola'><img style={{ width: '40px', height: '40px', marginRight: '15px' }} src={QuestionIcon} />About Taprola</div>
                <div onClick={this.getDataHowToUse} className='HowToUse'><img style={{ width: '40px', height: '40px', marginRight: '15px' }} src={HowDoThisIcon} />How to use</div>
            </div>
        </div>
        }
    }
}
export default Options;