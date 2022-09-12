import { filterActiveItem, filterItem } from '../Redux/Actions/Tenis.action';

export const handleChange = ({ value, checked }, property, setFilters) => {
  if (checked) {
    setFilters((oldFilters) =>
      Object.keys(oldFilters).indexOf(property) >= 0
        ? {
            ...oldFilters,
            [property]: [...new Set(oldFilters[property].concat(value))],
          }
        : {
            ...oldFilters,
            [property]: [value],
          }
    );
  } else {
    setFilters((oldFilters) => uncheckFilter(oldFilters, property, value));
  }
};

export const handleSubmit = (
  e,
  active_filter_list,
  filter_list,
  filters,
  items,
  dispatch,
  setShowModal
) => {
  e.preventDefault();

  if (Object.keys(filters).length === 0) {
    dispatch(filterActiveItem({}, active_filter_list));
  } else {
    dispatch(filterActiveItem(filters, active_filter_list));
    dispatch(filterItem(filters, items, filter_list));
  }
  setShowModal !== undefined && setShowModal(false);
};

export const checkIfChecked = (filters, name, property) => {
  if (Object.keys(filters).length >= 0) {
    return filters[property]?.indexOf(name) >= 0;
  }
};

export const uncheckFilter = (oldFilters, property, value) => {
  if (oldFilters[property].length > 1) {
    return removeValueFromFilter(oldFilters, property, value);
  } else {
    const newFilter = removeValueFromFilter(oldFilters, property, value);
    delete newFilter[property];
    return newFilter;
  }
};

export const removeValueFromFilter = (oldFilters, property, value) => {
  return {
    ...oldFilters,
    [property]: oldFilters[property].filter((filters) => filters !== value),
  };
};
