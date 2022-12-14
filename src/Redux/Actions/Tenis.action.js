import { getTenisesPlayers } from '../../_services/Tenis.service';
import {
  TENIS_LIST_REQUEST,
  TENIS_LIST_SUCCESS,
  TENIS_LIST_FAIL,
} from '../Constants/Tenis.constant';
import { sortPlayers } from '../../utils/sort.item';

export const getTenisesList = () => async (dispatch, getState) => {
  try {
    dispatch({ type: TENIS_LIST_REQUEST });

    const { players } = await getTenisesPlayers();

    dispatch({
      type: TENIS_LIST_SUCCESS,
      payload: sortPlayers(players, 'data', -1),
    });
  } catch (error) {
    dispatch({ type: TENIS_LIST_FAIL });
  }
};

export const filterActiveItem = (property, typeReducer) => (dispatch) => {
  dispatch({ type: typeReducer, payload: property });
};

export const filterItem = (property, items, typeReducer) => (dispatch) => {
  const filteredItems = items.filter((item) => {
    return Object.keys(property).every((filterAttribute) => {
      return property[filterAttribute].some((filterValue) => {
        return filterValue === String(item[filterAttribute]);
      });
    });
  });

  dispatch({ type: typeReducer, payload: filteredItems });
};
