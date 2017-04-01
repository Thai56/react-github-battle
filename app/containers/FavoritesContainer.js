import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

Favorite.propTypes = {
  fav: React.PropTypes.object.isRequired
}
function Favorite({fav}){
  return (
    <div style={{border: '10px solid purple'}}>
      <h4>Author:{fav.title}</h4>
      <h4>{fav.content}</h4>
    </div>
  )
}

class FavoritesContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      favorites: null
    }
    this.navToQuotes = this.navToQuotes.bind(this);
    this.favoritesGenerator = this.favoritesGenerator.bind(this);
  }

  navToQuotes() {
    hashHistory.push('/quotes');
  }

  componentWillMount() {
    const { favorites } = this.props;
    this.setState({favorites: favorites});
  }

  favoritesGenerator() {
    let { favorites } = this.state;
    if (favorites.size > 0) {
      return favorites.map( (fav, i) => {
        return (
          <Favorite
            key={ i }
            fav={ fav }
          />
        )
      });
    }
  }
  render() {
    let { favorites } = this.state;
    console.log('FavoritesContainer', favorites);
    return (
      <div style={{background: 'orange'}}>
        <button onClick={() => this.navToQuotes()}>back to quotes</button>
        {this.favoritesGenerator()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { favorites: state.get('favorites') };
}

export default connect(mapStateToProps)(FavoritesContainer);
