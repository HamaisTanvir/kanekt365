import axios from 'axios';

export const FETCH_PAGES_REQUEST = 'FETCH_PAGES_REQUEST';
export const FETCH_PAGES_SUCCESS = 'FETCH_PAGES_SUCCESS';
export const FETCH_PAGES_FAILURE = 'FETCH_PAGES_FAILURE';

export const fetchKanektPages = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PAGES_REQUEST });
    try {
      const response = await axios.get('https://test.kanekt365.com/api/pages/all');
      dispatch({ type: FETCH_PAGES_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_PAGES_FAILURE, error });
    }
  };
};
