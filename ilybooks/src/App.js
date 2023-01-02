
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import { PageRouter } from './Router/PageRouter';
import { Header } from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='WrapperHeader'>
          <div className='Container'>
            <Header/>
          </div>
        </div>
        <div className='WrapperContent'>
          <div className='Container'>
            <PageRouter/>
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  )

}

export default App;
