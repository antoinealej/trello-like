import { combineReducers } from 'redux';
import { cards, cardsHasErrored, cardsIsLoading } from './cards';
import { columns, columnsHasErrored, columnsIsLoading } from './columns';

export default combineReducers({
  cards,
  cardsHasErrored,
  cardsIsLoading,
  columns,
  columnsHasErrored,
  columnsIsLoading
});