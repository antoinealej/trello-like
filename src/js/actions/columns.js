import { COLUMNS_HAS_ERRORED, COLUMNS_IS_LOADING, COLUMNS_FETCH_DATA_SUCCESS } from '../constants/action-types';
import { getColumnsData } from "../services/backend";

export function columnsHasErrored(bool) {
  return {
    type: COLUMNS_HAS_ERRORED,
    hasErrored: bool
  };
}
export function columnsIsLoading(bool) {
  return {
    type: COLUMNS_IS_LOADING,
    isLoading: bool
  };
}
export function columnsFetchDataSuccess(columns) {
  return {
    type: COLUMNS_FETCH_DATA_SUCCESS,
    columns
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