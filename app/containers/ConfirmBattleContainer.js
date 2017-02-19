import React , { Component } from 'react';
import ConfirmBattle from '../components/ConfirmBattle';
import githubHelpers from '../utils/githubHelpers';

export default class ConfirmBattleContainer extends Component {
  constructor(props){
    super(props)

    this.state={
      isLoading:true,
      playerInfo:[]
    }
  }

  componentDidMount(){
    var query = this.props.location.query;
    githubHelpers.getPlayerInfo([query.playerOne, query.playerTwo])
      .then(function (players) {
        this.setState({
          isLoading: false,
          playerInfo: [players[0],players[1]]
        })
      }.bind(this))
  }

  handleInitiateBattle(){
    this.context.router.push({
      pathname: '/results',
      state: {
        playerInfo: this.state.playerInfo
      }
    })
  }
  render(){
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playerInfo={this.state.playerInfo}
        onInitiateBattle={this.handleInitiateBattle.bind(this)}
       />
    )
  }
}

ConfirmBattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}
