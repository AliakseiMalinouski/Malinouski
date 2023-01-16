
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { PageRouter } from './Router/PageRouter';
import { store } from './Redux/store';
import { Header } from './components/Header';
import { Banner } from './components/Banner';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='Header'>
          <div className='Container'>
              <Header/>
          </div>
        </div>
        <Banner/>
        <div className='Container'>
        <PageRouter/>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
