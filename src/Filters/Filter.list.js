import React, { memo } from 'react';
import { handleChange, checkIfChecked } from '../utils/filters';

const FilterList = ({ keyList, dataFilters, liClass, filters, setFilters }) => {
  return (
    <>
      <h6>{keyList}</h6>
      <ul className="filter">
        {dataFilters[keyList].map((player, index) => (
          <li key={index} className={liClass}>
            <input
              type="checkbox"
              value={player.type}
              onChange={(e) =>
                handleChange(e.target, player.property, setFilters)
              }
              checked={checkIfChecked(filters, player.type, player.property)}
            />
            {player.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default memo(FilterList);
