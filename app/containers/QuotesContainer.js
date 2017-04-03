import React, { Component } from 'react';
// import {Button} from 'react-semantic-ui';
import { hashHistory } from 'react-router';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from '../data/reducer';
import helper from '../utils/colorHelper';
import '../styles/font.css';
import log from './log';
function Quote({quote, title}) {
  return (
    <div className="quote-wrapper">
      <div style={{width:'80%', height: 400, margin: 'auto', border: '10px solid brown', padding: 16, marginBottom:60}}>
        <h3>Quote: {quote}</h3>
      </div>
      <h4>Title: {title}</h4> <br />
    </div>
  )
}

class QuotesContainer extends Component {
  constructor(props){
    super(props);
    this.state = {currentIndex: 0,quoteArr: [],background:null};
    this.addFavorite = this.addFavorite.bind(this);
  }

  addFavorite(quote) {
    const {dispatch} = this.props;
    const actions = bindActionCreators(Actions, dispatch);
    console.log(typeof quote,"QUOTE")
    actions.addFavorite(quote);
  }

  componentDidMount() {
    axios.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=20')
    .then(res => {
      console.log(res.data);
      this.setState({quoteArr: res.data});
    })
  }

  render() {
    const {reducer} = this.props;
    let {quoteArr, currentIndex} = this.state;
    let quote;
    quote = quoteArr.map( (item, index) => {
      if (index === currentIndex) {
        console.log('WORK', index);
        return (<Quote key={index} title={item.title} quote={item.content}/>)
      } else {
        return null;
      }
    });

    return (
      <div style={{background: `${helper.randomColor()}`, padding: 16, paddingLeft:100}}>
        <h1 style={{textAlign: 'center', color:`${helper.randomColor()}`}}>Quotes Container</h1>
        <div className="quotes">
        <button
          style={{
            float:'right',
            marginRight: 114
          }}
          onClick={() => {
            let quote = quoteArr[currentIndex];
            this.addFavorite(quote);
          }}
        >
          Favorite
        </button>

        <h3 style={{marginBottom: 24, color:`${helper.randomColor()}`}}>Current Quote {currentIndex + 1} out of {quoteArr.length}</h3>
          <span className={helper.randomFont()} style={{color:`${helper.randomColor()}`}}>{quote}</span>
        </div>
        <button
          style={{marginRight:16}}
          disabled={currentIndex < 1}
          onClick={() => {
            this.setState({currentIndex:currentIndex - 1})
            helper.randomColor();
            helper.randomFont();
          }}
        >
            Prev Quote
        </button>
        <button
          disabled={currentIndex === quoteArr.length - 1}
          onClick={() => {
            this.setState({ currentIndex:currentIndex + 1});
            helper.randomColor();
            helper.randomFont();
          }}
        >
          Next Quote
        </button>
        <button onClick={() => hashHistory.push('/favorites')}>go to favorites</button>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state,'THISISSTATE');
  return { favorites: state.get('favorites') }
};

connect(mapStateToProps)(QuotesContainer);

export default log(connect(mapStateToProps)(QuotesContainer));
