import React from 'react';
import './SortButtons.css'

const SortButtons = ({ setSortBy, setSortOrder }) => {
  const handleSort = (criteria) => {
    setSortBy(criteria);
    setSortOrder('asc');
  };

  return (
    <div className="sort-buttons">
      <button onClick={() => handleSort('total')}>Sort by Total</button>
      <button onClick={() => handleSort('friends')}>Sort by Friends</button>
      <button onClick={() => handleSort('influence')}>Sort by Influence</button>
      <button onClick={() => handleSort('chirpiness')}>Sort by Chirpiness</button>
    </div>
  );
};

export default SortButtons;
