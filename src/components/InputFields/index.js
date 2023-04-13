import React, { useState } from "react";
import {Select, Button } from "antd";
import TaskTitleInput from "../TaskTitleInput";
import TaskDescriptionInput from "../TaskDescriptionInput";
import DatePickerInput from "../DatePickerInput";
import StatusInput from "../StatusInput";
import TagsInput from "../TagsInput";

const { Option } = Select;

const InputFields = ({ onAddRow,numOfTasks }) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDesc, setNewTaskDesc] = useState("");
  const [newEndDate, setNewEndDate] = useState(null);
  const [newStatus, setNewStatus] = useState("");
  const [newTags, setNewTags] = useState([]);

  const handleAddRow = () => {
    const newRow = {
      key: numOfTasks + 1,
      taskTitle: newTaskTitle,
      taskDescription: newTaskDesc,
      createdTime: new Date().toLocaleString(),
      endDate: newEndDate,
      status: newStatus,
      tags: newTags,
    };

    onAddRow(newRow);

    setNewTaskTitle("");
    setNewTaskDesc("");
    setNewEndDate(null);
    setNewStatus("");
    setNewTags([]);
  };

  const handleTagsChange = (newTags) => {
    setNewTags(newTags);
  };
  

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <TaskTitleInput onChange={setNewTaskTitle} />
        <TaskDescriptionInput onChange={setNewTaskDesc} />
        <DatePickerInput onChange={setNewEndDate} />
        <StatusInput defaultValue='' onChange={setNewStatus} />
        <TagsInput onChange={handleTagsChange} />
        <Button type="primary" onClick={handleAddRow}>
          Add
        </Button>
      </div>
    </>
  );
};

export default InputFields;
