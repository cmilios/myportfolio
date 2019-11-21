import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import * as Sentry from '@sentry/browser';
import Home from "./Home"


Sentry.init({dsn: "https://648b12265e4d4f0ca5277b253d613bfa@sentry.io/1829238"});

ReactDOM.render(<Home/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
