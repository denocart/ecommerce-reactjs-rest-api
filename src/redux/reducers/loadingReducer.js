import { SET_LOADING, CLEAR_LOADING, SET_INITIAL_LOADING, CLEAR_INITIAL_LOADING } from '../actions/types';

const initialState = {
    loading : false,
    initialLoading:false
};

export default function(state = initialState, action) {
    const { type } = action;
  switch (type) {
    case SET_LOADING:
      return  {
            ...state,
            loading:true
        }
    case CLEAR_LOADING:
        return  {
            ...state,
            loading:false
        }

        case SET_INITIAL_LOADING:
      return  {
            ...state,
            initialLoading:true
        }
    case CLEAR_INITIAL_LOADING:
        return  {
            ...state,
            initialLoading:false
        }
    default:
      return state;
  }
}