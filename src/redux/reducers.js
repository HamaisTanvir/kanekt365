import { FETCH_PAGES_REQUEST, FETCH_PAGES_SUCCESS, FETCH_PAGES_FAILURE } from './actions';

const initialState = {
  loading: false,
  kanektPages: [],
  error: ''
};

const kanektPagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PAGES_REQUEST:
      return { ...state, loading: true };
    case FETCH_PAGES_SUCCESS:
      return { loading: false, kanektPages: action.payload, error: '' };
    case FETCH_PAGES_FAILURE:
      return { loading: false, kanektPages: [], error:action.message || "Something went wrong"  };
    default:
      return state;
  }
};

export default kanektPagesReducer;
