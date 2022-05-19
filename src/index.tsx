import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactGA from 'react-ga';
import { ColorModeScript } from '@chakra-ui/react';
import './shared/styles.scss';
import App from './app';
import reportWebVitals from './reportWebVitals';
import theme from './shared/theme';
import * as ErrorHandler from './globals/error-handler';
import { getConfig } from './globals/env-config';

ErrorHandler.init();
ReactGA.initialize(getConfig('REACT_APP_GA_TRACKING_CODE'));
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
