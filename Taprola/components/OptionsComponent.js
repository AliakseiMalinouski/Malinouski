import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MobileIcon from '../json/icon-modileopt.json';
import QuestionIcon from '../json/icon-question.json';



class Options extends React.PureComponent {
    static propTypes = {
        
    }

    state = {
        dataSuccess: false,
        dataLoaded: null,
    }

    getData = () => {
        if (this.state.dataLoaded == null) {
            this.loadData();
        }
        else {
            this.fetchSuccess(this.state.dataLoaded);
        }
    }


    fetchSuccess = (data) => {
        this.setState({
            dataSuccess: true,
            dataLoaded: data,
        });
    }

    
    loadData = () => {
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
                this.fetchSuccess(data);
            })
            .catch(error => {
            alert(error)
        })
    }

    closeDescription = (EO) => {
        this.setState({ dataSuccess: false });
    }


    render() {
        if (!this.state.dataSuccess) {
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
        else if (this.state.dataSuccess) {
            return <div className='WrapperOptions'>
                <div className='Illustration'>
                    <h3>Remember<br/> <span>more</span></h3>
                    <img src={MobileIcon} alt="Smartphone" />
                    {
                        (this.state.dataLoaded == null)
                            ?
                            <div>Loading...</div>
                            :
                            <div>
                                <p className='AboutTaprolaParagraph'>{this.state.dataLoaded}</p>
                                <div className='OkayButton' onClick={this.closeDescription}>Okay</div>
                            </div>
                    }
                </div>
            </div>
        }
    }
}
export default Options;