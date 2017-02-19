import React , {Component} from 'react';
import Prompt from '../components/Prompt';


export default class PromptContainer extends Component{

  constructor(props){
    super(props)

    this.state = {
      username:''
    }
    this.updateUser = this.updateUser.bind(this);
    this.onSubmitUser = this.onSubmitUser.bind(this);
  }

  updateUser(e){
    this.setState({username:e.target.value})
  }

  onSubmitUser(e){
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username:''
    });

    if(this.props.routeParams.playerOne){
      console.log(this.context);
      //go to battle
      this.context.router.push({
        pathname:'/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      console.log(this.context);
      //go to player two
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  }

  render(){
    return (
      <Prompt
      onSubmitUser = {this.onSubmitUser}
      updateUser = {this.updateUser}
      header = {this.props.route.header}
      username={this.state.username}
       />
    )
  }
}

PromptContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}
