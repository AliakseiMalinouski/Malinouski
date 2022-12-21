
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { PageRouter } from './Router/PageRouter';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
      <div className='container'>
          <PageRouter/>
      </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
