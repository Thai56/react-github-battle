import React , { Component } from 'react';
var PropTypes = React.PropTypes;

var styles = {
  container : {
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    fontSize: '55px'
  },
  content: {
    textAlign: 'center',
    positions: 'absolute',
    width: '100%',
    margintop: '30px'
  }
}

export default class Loading extends Component {
  constructor(props){
    super(props)

    this.originalText = this.props.text;

    this.state = {
      text: this.originalText
    }

  }

  componentDidMount(){
    var stopper = `${this.originalText}...`;
    this.interval = setInterval(function () {
      if (this.state.text === stopper) {
        this.setState({
          text: this.originalText
        })
      } else {
        this.setState({
          text: this.state.text + '.'
        })
      }
    }.bind(this), this.props.speed)
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render(){
    return (
      <div style={styles.container} className="">
        <p style={styles.content}>{this.state.text}</p>
      </div>
    )
  }
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
}
Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number
}
