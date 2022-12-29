import React from "react";

const FormResult = (props) => {
  return (
    <ul>
      {props.expenseData.map((elem) => (
        <li key={`${Math.random().toString()}`}>
          {elem.name} {elem.age}
        </li>
      ))}
    </ul>
  );
};

export default FormResult;
