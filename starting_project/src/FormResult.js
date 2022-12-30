import React from "react";
import styles from "./FormResult.module.css";
import Wrap from "./UI/Wrap";
const FormResult = (props) => {
  return (
    <Wrap className={styles.users}>
      <ul>
        {props.expenseData.map((elem) => (
          <li key={`${Math.random().toString()}`}>
            {elem.name} {elem.age}
          </li>
        ))}
      </ul>
    </Wrap>
  );
};

export default FormResult;
