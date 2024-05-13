import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './DateFilter.css'

const DateFilter = ({ setFromDate, setToDate }) => {
  const [fromDateState, setFromDateState] = useState(null);
  const [toDateState, setToDateState] = useState(null);

  const handleFromDateChange = (date) => {
    setFromDateState(date);
    setFromDate(date);
  };

  const handleToDateChange = (date) => {
    setToDateState(date);
    setToDate(date);
  };

  return (
    <div className="date-filter">
      <DatePicker
        selected={fromDateState}
        onChange={handleFromDateChange}
        placeholderText="From Date"
      />
      <DatePicker
        selected={toDateState}
        onChange={handleToDateChange}
        placeholderText="To Date"
      />
    </div>
  );
};

export default DateFilter;
