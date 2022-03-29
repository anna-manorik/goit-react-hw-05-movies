import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter  } from 'react-router-dom';
import App from './components/App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter  basename='process.env.PUBLIC_URL'>
      <App />
    </HashRouter >
  </React.StrictMode>,
  document.getElementById('root')
);
