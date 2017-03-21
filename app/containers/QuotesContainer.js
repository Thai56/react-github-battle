import React from 'react';
import axios from 'axios';

function Quote(props) {
  return (
    <div className="quote-wrapper">
      <div style={{width:'80%', height: 400, margin: 'auto', border: '10px solid brown', padding: 16, marginBottom:60}}>
        <h3>Quote: {props.quote}</h3>
      </div>
      <h4>Title: {props.title}</h4> <br />
    </div>
  )
}
export default class QuotesContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {currentIndex: 0,quoteArr: []};
  }

  componentWillMount() {
    axios.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=20')
    .then(res => {
      console.log(res.data);
      this.setState({quoteArr: res.data})
    })
  }
  render() {
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
      <div style={{background: 'tan', padding: 16}}>
        <h1 style={{textAlign: 'center'}}>Quotes Container</h1>
        <h3>Current Quote {currentIndex + 1} out of {quoteArr.length}</h3>
        <div className="quotes">
          {quote}
        </div>
        <button onClick={() => this.setState({currentIndex:currentIndex - 1})}>Prev Quote</button>
        <button onClick={() => this.setState({currentIndex:currentIndex + 1})}>Next Quote</button>
      </div>
    )
  }
}
