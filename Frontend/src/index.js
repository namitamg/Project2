import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import {BrowserRouter as Router} from 'react-router-dom'





import {createStore , applyMiddleware}  from 'redux'
import {Provider } from 'react-redux' 
import {rootReducer} from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const store= createStore(
  rootReducer, 
  {},
  composeWithDevTools(applyMiddleware(thunk))
)








  

// import 'bootstrap/dist/css/bootstrap-theme.css';
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>

      <Router>
        <App />
      </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
