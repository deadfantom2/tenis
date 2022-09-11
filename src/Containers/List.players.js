import React, { memo } from 'react';
import TenisCard from '../Components/Tenis.card';

const ListPlayerContainer = ({ activeFilters, filterItems, items }) => {
  return (
    <>
      {Object.keys(activeFilters).length === 0 ? (
        items.length > 0 ? (
          items.map((item) => <TenisCard key={item.lastname} item={item} />)
        ) : (
          <div>
            <h3>No Items</h3>
          </div>
        )
      ) : (
        filterItems.map((item) => <TenisCard key={item.lastname} item={item} />)
      )}
    </>
  );
};

export default memo(ListPlayerContainer);
