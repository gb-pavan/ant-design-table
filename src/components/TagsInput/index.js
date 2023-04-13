import React, { useState } from "react";
import { Input, Tag } from "antd";

const TagsInput = ({ onChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && !tags.includes(inputValue)) {
      setTags([...tags, inputValue]);
      onChange([...tags, inputValue]); // Call onChange prop with new tags list
      setInputValue("");
    }
  };

  const handleTagClose = (tag) => {
    const newTags = tags.filter((t) => t !== tag);
    setTags(newTags);
    onChange(newTags); // Call onChange prop with new tags list
  };

  return (
    <div>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputConfirm}
        onPressEnter={handleInputConfirm}
        placeholder="Enter tag and press Enter"
        style={{ width: "100%" }}
      />
      {tags.map((tag) => (
        <Tag
          key={tag}
          closable
          onClose={() => {
            handleTagClose(tag);
          }}
        >
          {tag}
        </Tag>
      ))}
    </div>
  );
};

export default TagsInput;
