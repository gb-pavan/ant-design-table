import React from 'react';

function StatusStyling(props) {
  let color = "black";
  
  // Check the text and set color accordingly
  if (props.text.includes("Not Started")) {
    color = "grey";
  } else if (props.text.includes("In Progress")) {
    color = "blue";
  }
  else if (props.text.includes("Completed")) {
    color = "green";
  }
  else if (props.text.includes("Cancelled")) {
    color = "red";
  }
  
  const style = {
    color: color,
    border: `1px solid ${color}`,
    borderRadius: "5px",
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "bold"
  };

  return (
    <p style={style}>{props.text}</p>
  );
}

export default StatusStyling;
