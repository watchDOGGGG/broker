import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Container/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

