import { CARDS_HAS_ERRORED, CARDS_IS_LOADING, CARDS_FETCH_DATA_SUCCESS, CARDS_CREATE } from '../constants/action-types';

export function cardsHasErrored(state = false, action) {
  switch (action.type) {
    case CARDS_HAS_ERRORED:
      return action.hasErrored;
    default:
      return state;
  }
}
export function cardsIsLoading(state = false, action) {
  switch (action.type) {
    case CARDS_IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}
export function cards(state = [], action) {
  switch (action.type) {
    case CARDS_FETCH_DATA_SUCCESS:
      return action.cards;
    case CARDS_CREATE:
      return [...state, action.card];
    default:
      return state;
  }
}
