import React from "react";
import { Input } from "antd";

const TaskDescriptionInput = ({ onChange }) => {
  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <Input.TextArea
      placeholder="Task Description"
      onChange={handleInputChange}
    />
  );
};

export default TaskDescriptionInput;
