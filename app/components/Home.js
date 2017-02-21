import React , { Component } from 'react';
import styles from '../styles/index';
import {Link} from 'react-router';
import MainContainer from './MainContainer';

export default class Home extends Component {
  render(){
    return (
      <MainContainer>
        <h1>Github Battle</h1>
       <p className="lead">Some fancy motto</p>
       <Link to='/playerOne'>
         <button type='button' className='btn btn-lrg btn-success'>Get Started</button>
       </Link>
      </MainContainer>
    )
  }
}
