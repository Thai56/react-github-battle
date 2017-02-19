import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import routes from './config/routes';
import {Router,hashHistory} from 'react-router';
ReactDOM.render(
  <Router history={hashHistory } routes={routes}/>
  ,document.getElementById('app')
);
