import React, { useState, useEffect } from 'react';
import FollowerItem from './FollowerItem.jsx';
import DateFilter from './DateFilter.jsx';
import SortButtons from './SortButtons.jsx';

import './App.css'

const App = () => {
  const [followers, setFollowers] = useState([]);
  const [filteredFollowers, setFilteredFollowers] = useState([]);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    // Fetch follower data from the API endpoint
    fetch('https://gist.githubusercontent.com/pandemonia/21703a6a303e0487a73b2610c8db41ab/raw/82e3ef99cde5b6e313922a5ccce7f38e17f790ac/twubric.json')
      .then(response => response.json())
      .then(data => {
        setFollowers(data);
        setFilteredFollowers(data);
      })
      .catch(error => console.error('Error fetching followers:', error));
  }, []);

  // Filter followers based on date range
useEffect(() => {
  if (fromDate && toDate) {
    const filtered = followers.filter(follower => {
      const joinDate = new Date(follower.join_date * 1000); // Convert Unix timestamp to Date object
      return joinDate >= fromDate && joinDate <= toDate;
    });
    setFilteredFollowers(filtered);
  } else {
    setFilteredFollowers(followers);
  }
}, [followers, fromDate, toDate]);

  // Sort followers based on selected criteria and order
  useEffect(() => {
    if (sortBy) {
      const sorted = [...filteredFollowers].sort((a, b) => {
        if (sortOrder === 'asc') {
          return a.twubric[sortBy] - b.twubric[sortBy];
        } else {
          return b.twubric[sortBy] - a.twubric[sortBy];
        }
      });
      setFilteredFollowers(sorted);
    }
  }, [filteredFollowers, sortBy, sortOrder]);

  // Function to handle removing a follower
  const handleRemoveFollower = (followerId) => {
    const updatedFollowers = filteredFollowers.filter(follower => follower.uid !== followerId);
    setFollowers(updatedFollowers);
    setFilteredFollowers(updatedFollowers);
  };

  return (
    <div className="app">
      <div className='Hading'>
        <h1>ExhiByte Solution Assingment</h1>
      </div>
      <DateFilter setFromDate={setFromDate} setToDate={setToDate} />
      <SortButtons setSortBy={setSortBy} setSortOrder={setSortOrder} />
      <div className="follower-list">
        {filteredFollowers.map(follower => (
          <FollowerItem key={follower.uid} follower={follower} handleRemove={handleRemoveFollower} />
        ))}
      </div>
    </div>
  );
};

export default App;
