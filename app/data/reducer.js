import Immutable, { Map } from 'immutable';

export const types = {
  UPDATE_STATE: 'UPDATE_STATE',
  ADD_FAVORITE: 'ADD_FAVORITE',
  REMOVE_FAVORITE: 'REMOVE_FAVORITE'
};

export const Actions = {
  addFavorite: (change) => ({
    type: types.ADD_FAVORITE,
    change
  }),
  updateState: (change) => ({
    type: types.UPDATE_STATE,
    change
  }),
  removeFavorite: (change) => ({
    type: types.REMOVE_FAVORITE,
    change
  })
};

const updateState = (state, change) => {

  let prevState = state,
      currentState = state.updateIn(change.key, () => {
        return change.value;
      });

};

const addFavorite = (state, change) => {
  let currentState = state.updateIn(["favorites"], (arr) => arr.push(change));
  return currentState;
}

const removeFavorite = (state, change) => {
  let myArray = [];
  let currentState = state.deleteIn(['favorites', change])
  console.log('LOG',currentState, state.get('favorites').get(change), state.get('favorites'), change)
  return currentState;
}

const initialState = Immutable.fromJS({
  favorites: []
});

export default function(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_STATE:
    return updateState(state, action.change);
    case types.ADD_FAVORITE:
    return addFavorite(state, action.change);
    case types.REMOVE_FAVORITE:
    return removeFavorite(state, action.change);
    default:
    return state;
  }
}
