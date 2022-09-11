import {
  TENIS_LIST_REQUEST,
  TENIS_LIST_SUCCESS,
  TENIS_LIST_FAIL,
  ITEM_ACTIVE_FILTER_LIST,
  ITEM_FILTER_LIST,
} from '../Constants/Tenis.constant';

export const tenisesListReducer = (
  state = { tenisesList: [], activeFilters: {}, filterItems: [] },
  action
) => {
  switch (action.type) {
    case TENIS_LIST_REQUEST:
      return {
        loading: true,
        tenisesList: [],
        activeFilters: {},
        filterItems: [],
      };
    case TENIS_LIST_SUCCESS:
      return { ...state, loading: false, tenisesList: action.payload };
    case TENIS_LIST_FAIL:
      return { loading: false, tenisesList: [] };
    case ITEM_ACTIVE_FILTER_LIST:
      return { ...state, activeFilters: action.payload };
    case ITEM_FILTER_LIST:
      return { ...state, filterItems: action.payload };
    default:
      return state;
  }
};
