import React from "react";
import { DatePicker } from "antd";

const DatePickerInput = ({ onChange }) => {
  const handleDateChange = (date, dateString) => {
    onChange(dateString);
  };

  return <DatePicker onChange={handleDateChange} placeholder="End Date" />;
};

export default DatePickerInput;
