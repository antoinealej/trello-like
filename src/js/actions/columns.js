import {
  COLUMNS_HAS_ERRORED,
  COLUMNS_IS_LOADING,
  COLUMNS_FETCH_DATA_SUCCESS,
  COLUMN_CREATE,
  COLUMN_UPDATE,
  COLUMN_DELETE,
} from '../constants/action-types';
import { getColumnsData } from '../services/backend';

export function columnsHasErrored(bool) {
  return {
    type: COLUMNS_HAS_ERRORED,
    hasErrored: bool,
  };
}
export function columnsIsLoading(bool) {
  return {
    type: COLUMNS_IS_LOADING,
    isLoading: bool,
  };
}
export function columnsFetchDataSuccess(columns) {
  return {
    type: COLUMNS_FETCH_DATA_SUCCESS,
    columns,
  };
}

export function columnsFetchData() {
  return (dispatch) => {
    dispatch(columnsIsLoading(true));
    getColumnsData()
      .then((res) => {
        dispatch(columnsIsLoading(false));
        dispatch(columnsFetchDataSuccess(res.data));
        return res.data;
      })
      .catch(() => dispatch(columnsHasErrored(true)));
  };
}

export function addColumn(column) {
  // Call to the backend to add the column
  return {
    type: COLUMN_CREATE,
    column,
  };
}

export function updateColumn(column) {
  // Call to the backend to update the column
  return {
    type: COLUMN_UPDATE,
    column,
  };
}

export function deleteColumn(column) {
  // Call to the backend to delete the column
  return {
    type: COLUMN_DELETE,
    column,
  };
}
