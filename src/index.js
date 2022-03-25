import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Provider } from 'react-redux';
import store from './Store/store'
import { BrowserRouter } from 'react-router-dom';
import NewApp from './NewApp';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      
    <App />
    
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
