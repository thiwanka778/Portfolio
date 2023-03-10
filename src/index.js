import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import 'react-alice-carousel/lib/alice-carousel.css';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
   
      <App />
     
    </Provider>
  </React.StrictMode>
);


