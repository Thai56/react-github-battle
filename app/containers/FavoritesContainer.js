import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import helper from '../utils/colorHelper';
import { Actions } from '../data/reducer';
Favorite.propTypes = {
  fav: React.PropTypes.object.isRequired
}
function Favorite({fav, actions, index}){
  const removeFavorite = (index) => {
    actions.removeFavorite(index)
  };
  return (
    <div style={{border: `10px solid ${helper.randomColor()}`, background:helper.randomColor()}}>
      <h4 className={helper.randomFont()}>Author:{fav.title}</h4>
      <h4 className={helper.randomFont()}>{fav.content}</h4>
      <button onClick={() => removeFavorite(index)}>remove from favorites</button>
    </div>
  )
}

class FavoritesContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      favorites: []
    }
    this.navToQuotes = this.navToQuotes.bind(this);
    this.favoritesGenerator = this.favoritesGenerator.bind(this);
  }

  navToQuotes() {
    hashHistory.push('/quotes');
  }

  componentDidMount() {
    const { favorites } = this.props;
    this.setState({favorites: favorites});
  }

  componentWillUpdate(nextProps, nextState) {
    if(nextProps.favorites.size < this.props.favorites.size){
      console.log('=  =  =  =  NOT THE SAME', nextProps, nextProps.favorites, this.props, this.props.favorites);
      this.setState({favorites: nextProps.favorites});
    }
  }

  favoritesGenerator() {
    const { dispatch } = this.props;
    const actions = bindActionCreators(Actions, dispatch);
    let { favorites } = this.state;
    if (favorites.size > 0) {
      return favorites.map( (fav, i) => {
        return (
          <Favorite
            key={ i }
            index={ i }
            fav={ fav }
            actions={ actions }
          />
        )
      });
    }
  }

  render() {
    let { favorites } = this.state, height=600;
    console.log('FavoritesContainer', favorites);

    return (
      <div style={{background: helper.randomColor()}}>
        <button onClick={() => this.navToQuotes()}>back to quotes</button>
        {this.favoritesGenerator()}
      </div>
    )
  }
}

FavoritesContainer.propTypes = {
  favorites: React.PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return { favorites: state.get('favorites') };
}

export default connect(mapStateToProps)(FavoritesContainer);
