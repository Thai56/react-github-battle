import Immutable, { Map } from 'immutable';

export const types = {
  UPDATE_STATE: 'UPDATE_STATE',
  ADD_FAVORITE: 'ADD_FAVORITE'
};

export const Actions = {
  addFavorite: (change) => ({
    type: types.ADD_FAVORITE,
    change
  }),
  updateState: (change) => ({
    type: types.UPDATE_STATE,
    change
  })
};

const updateState = (state, change) => {

  let prevState = state,
      currentState = state.updateIn(change.key, () => {
        return change.value;
      });

};

const addFavorite = (change) => {
  let currentState = (['favorites'], (arr) => {
    arr.push(change);
  });
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
    return addFavorite(state, action.change)
    default:
    return state;
  }
}
