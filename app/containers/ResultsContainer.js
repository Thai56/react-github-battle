import React , { Component } from 'react';
import Results from '../components/Results';
import githubHelpers from '../utils/githubHelpers';
export default class ResultsContainer extends Component {
  constructor(props){
    super(props)

    this.state= {
      isLoading:true,
      scores:[]
    }
  }

  componentDidMount(){
    githubHelpers.battle(this.props.location.state.playerInfo)
      .then(function (scores) {
        console.log(scores);
        this.setState({
          scores:scores,
          isLoading:false
        })
      }.bind(this))
  }

  render(){
    return (
      <Results
        isLoading={this.state.isLoading}
        scores={this.state.scores}
        playerInfo={this.props.location.state.playerInfo}/>
    )
  }
}
