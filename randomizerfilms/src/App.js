import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { PageRouter } from './Router/PageRouter';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='Container'>
          <PageRouter/>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
