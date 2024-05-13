import React from 'react';
import './FollowerItem.css'

const FollowerItem = ({ follower, handleRemove }) => {
  return (
    <div className="follower-item">
      <img src={follower.image} alt={follower.fullname} />
      <div className="follower-info">
        <h3>{follower.fullname}</h3>
        <p>@{follower.username}</p>
        <p>Joined Twitter: {new Date(follower.join_date * 1000).toLocaleDateString()}</p>
        <p>Total Twubric Score: {follower.twubric.total}</p>
        <button onClick={() => handleRemove(follower.uid)}>Remove</button>
      </div>
    </div>
  );
};

export default FollowerItem;
