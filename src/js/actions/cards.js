import {
  CARDS_HAS_ERRORED, CARDS_IS_LOADING, CARDS_FETCH_DATA_SUCCESS, CARDS_CREATE, CARDS_UPDATE,
} from '../constants/action-types';
import { getCardsData } from '../services/backend';

export function cardsHasErrored(bool) {
  return {
    type: CARDS_HAS_ERRORED,
    hasErrored: bool,
  };
}
export function cardsIsLoading(bool) {
  return {
    type: CARDS_IS_LOADING,
    isLoading: bool,
  };
}
export function cardsFetchDataSuccess(cards) {
  return {
    type: CARDS_FETCH_DATA_SUCCESS,
    cards,
  };
}

export function cardsFetchData() {
  return (dispatch) => {
    dispatch(cardsIsLoading(true));
    getCardsData()
      .then((res) => {
        dispatch(cardsIsLoading(false));
        dispatch(cardsFetchDataSuccess(res.data));
        return res.data;
      })
      .catch(() => dispatch(cardsHasErrored(true)));
  };
}

export function addCard(card) {
  // Call to the backend to add the card
  return {
    type: CARDS_CREATE,
    card,
  };
}

export function updateCard(card) {
  // Call to the backend to update the card
  return {
    type: CARDS_UPDATE,
    card,
  };
}
