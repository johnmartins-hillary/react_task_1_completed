import React from "react";
import "./LongText.css";

const LongText = () => {
  return (
    <div className="text_container ">
      <h4>Question Text</h4>
      <input placeholder="long text" required type="text" />
    </div>
  );
};

export default LongText;
