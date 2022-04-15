import React from "react";
import "./ShortText.css";

const ShortAnswer = (props) => {
  return (
    <div className=" short_text_continer ">
      <h4>Question text</h4>
      <input className="input" required type="text" />
    </div>
  );
};

export default ShortAnswer;
