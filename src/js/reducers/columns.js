import {
  COLUMNS_HAS_ERRORED,
  COLUMNS_IS_LOADING,
  COLUMNS_FETCH_DATA_SUCCESS,
  COLUMN_CREATE,
  COLUMN_UPDATE,
  COLUMN_DELETE,
} from '../constants/action-types';

export function columnsHasErrored(state = false, action) {
  switch (action.type) {
    case COLUMNS_HAS_ERRORED:
      return action.hasErrored;
    default:
      return state;
  }
}
export function columnsIsLoading(state = false, action) {
  switch (action.type) {
    case COLUMNS_IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}
export function columns(state = [], action) {
  switch (action.type) {
    case COLUMNS_FETCH_DATA_SUCCESS:
      return action.columns;
    case COLUMN_CREATE:
      return [...state, action.column];
    case COLUMN_UPDATE:
      return state.map((column) => {
        if (column.id !== action.column.id) return column;
        return {
          ...column,
          ...action.column,
        };
      });
    case COLUMN_DELETE:
      return state.filter(column => (column.id !== action.column.id));
    default:
      return state;
  }
}
