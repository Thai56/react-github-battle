import React from 'react';
import {Link} from 'react-router';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';
import styles from '../styles/index';

var PropTypes = React.PropTypes;

function puke(obj){
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}
function ConfirmBattle(props){
  return props.isLoading === true ?
  <h1>Loading...</h1> :
<div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
    <h1>Confirm Players</h1>
    <div className="col-sm-8 col-sm-offset-2">
      <UserDetailsWrapper header="Player One">
        <UserDetails info={props.playerInfo[0]} />
      </UserDetailsWrapper>
      <UserDetailsWrapper header="Player Two">
        <UserDetails info={props.playerInfo[1]} />
      </UserDetailsWrapper>
  </div>
  <div className="col-sm-8 col-sm-offset-2">
    <div className="col-sm-12" style={styles.space}>
      <button className='btn btn-lg btn-success'
      onClick = {props.onInitiateBattle}>
        Initiate Battle
      </button>
    </div>
    <div className="col-sm-12" style={styles.space}>
      <Link to='playerOne'>
        <button type="button" className='btn btn-lg btn-danger'>
          Reselect Players
        </button>
      </Link>
    </div>
  </div>
</div>
}

ConfirmBattle.propTypes = {
  isLoading:PropTypes.bool.isRequired,
  playerInfo:PropTypes.array.isRequired,
  onInitiateBattle:PropTypes.func.isRequired
}

export default ConfirmBattle
