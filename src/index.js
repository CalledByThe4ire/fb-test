import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import 'normalize.scss/normalize.scss';
import 'box-sizing-border-box/index.scss';
import App from './components/app';

WebFont.load({
  google: {
    families: ['Exo 2:100', 'sans-serif']
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

