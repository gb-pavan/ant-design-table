import React from "react";
import { Select } from "antd";

const { Option } = Select;

const StatusInput = ({ onChange,defaultValue }) => {

  const handleStatusChange = (value) => {
    onChange(value);
  };
  

  return (
    <Select defaultValue={defaultValue} style={{ width: 120 }} onChange={handleStatusChange} >
      <Option value="" >Select Status</Option>
      <Option value="Not Started" >Not Started</Option>
      <Option value="In Progress" >In Progress</Option>
      <Option value="Completed" >Completed</Option>
      <Option value="Cancelled" >Cancelled</Option>
    </Select>
  );
};

export default StatusInput;
