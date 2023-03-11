import React from 'react';
import '../src/vendor/line-awesome/css/line-awesome.min.css'
import '../src/vendor/font-awesome/css/all.min.css'
import '../src/vendor/flaticon/flaticon.css'
import '../src/vendor/themify/themify-icons.css'
import './vendor/bootstrap-select/css/bootstrap-select.min.css'
import './vendor/swiper/swiper.min.css'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
