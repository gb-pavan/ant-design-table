import React from "react";
import { Input } from "antd";

const TaskTitleInput = ({ onChange }) => {
  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <Input placeholder="Task Title" onChange={handleInputChange} />
  );
};

export default TaskTitleInput;
