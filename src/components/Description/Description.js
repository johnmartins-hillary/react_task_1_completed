import React from "react";
import useAuth from "../../hooks/useAuth";

const Description = (props) => {
  const { question } = props.quiz;
  const { handleSimpleInput } = useAuth();

  return (
    <div className=" p-2 ">
      <h4 className="  mb-5">{question}</h4>
      <textarea
        placeholder="description"
        onChange={handleSimpleInput}
        className="w-100"
        style={{ height: "100px" }}
        required
        type="text"
      />
    </div>
  );
};

export default Description;
