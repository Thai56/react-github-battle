import {
  fromJS, Map
 } from 'immutable';
import React , {
  Component
 } from 'react';
import {
  Provider
 } from 'react-redux';
import {
  createStore
 } from 'redux';
import ReactDOM from 'react-dom';
import routes from './config/routes';
import {
  Router,
  hashHistory
} from 'react-router';

import reducer from './data/reducer';


const initialState = Map(window.__INITIAL_STATE__);
const store = createStore(reducer);
ReactDOM.render(
  <Provider store={ store }>
    <Router history={hashHistory } routes={routes}/>
  </Provider>
  ,document.getElementById('app')
);


// const store = createStore(reducer);
