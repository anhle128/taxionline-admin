"use strict";

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';


import routes from './routes';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(routes, document.getElementById('app'))
