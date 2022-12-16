
import './App.css';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PagesRouter } from './router/PagesRouter';
import '../src/i18n/config';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Header } from './components/Header';

export const App = () => {

    const [newResize, setNewResize] = useState(false);

    const resize = (bool) => {
        setNewResize(bool);
    }

  return (
    <BrowserRouter>
        <Provider store={store}>
            <div className='WrapperHeader'>
                <div id='container'>
                      <Header cbResize={resize} />
                </div>
            </div>
            <div className='WrapperContent' style={{paddingTop: !newResize ? '100px' : '400px', transition: '1s'}}>
                <div id='container'>
                    <PagesRouter/>
                </div>
            </div>
        </Provider>
    </BrowserRouter>
  )
}

export default App;
