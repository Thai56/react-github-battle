const USER_DATA = {
  name: "Thai Tran",
  username: "Thai56",
  image: 'https://avatars1.githubusercontent.com/u/16358617?v=3&s=460'
}

import React , {Component} from 'react';
import ReactDOM from 'react-dom';

// f(d)=v

function ProfilePic(props){
  return <img src={props.imageUrl} style={{height: 100, width: 100}}/>
}

function ProfileLink(props){
  return <div>
    <a href={`https://www.github.com/${props.username}`}>{props.username}</a>
  </div>
}

function ProfileName(props){
  return <div className="">
    {props.name}
  </div>
}

class Avatar extends Component {
    render(){
      return (
        <div className="">
          <ProfilePic imageUrl={this.props.user.image} />
          <ProfileName name={this.props.user.name} />
          <ProfileLink username={this.props.user.username} />
        </div>
      )
    }
}

ReactDOM.render(
  <Avatar user={USER_DATA}/>
  ,document.getElementById('app')
);


//Pure Functions
//Evaluates the same result given the same arguments
//Doesn't depend on and doesn't modify the states of variables outof its scope
//No side effects (mutations, async reqs)
