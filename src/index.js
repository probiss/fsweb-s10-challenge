import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { legacy_createStore as createStore ,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {myReducer} from './reducers';
import thunk from 'redux-thunk';
import { ToastContainer, toast } from 'react-toastify';


const store = createStore(myReducer ,applyMiddleware(thunk)); 
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <BrowserRouter>
  <Provider store={store} >
    <>
      <ToastContainer />
      <App />
    </>
  </Provider>
  </BrowserRouter>
);
