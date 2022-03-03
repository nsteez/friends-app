import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';   //<App />
//import Card from './Card';
//import CardList from './CardList';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

//import {friends} from './friends';

ReactDOM.render(
  <React.StrictMode>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=M+PLUS+Code+Latin:wght@500&family=Poiret+One&display=swap');
    </style>

    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
