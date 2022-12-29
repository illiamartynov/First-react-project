import React, { useState } from "react";
import Wrap from "./UI/Wrap";
import styles from './UserForm.module.css'

const UserForm = (props) => {
  const [onChangeName, setOnChangeName] = useState("");
  const [onChangeAge, setOnChangeAge] = useState("");

  const inputNameChangeHandler = (e) => {
    setOnChangeName(e.target.value);
  };
  const inputAgeChangeHandler = (e) => {
    setOnChangeAge(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (onChangeName.trim().length === 0 || onChangeAge.trim().length === 0) {
      return;
    }

    if (onChangeAge < 1) {
      return;
    }
    const expenses = {
      name: onChangeName,
      age: onChangeAge,
    };
    props.onAddUser(expenses);
    setOnChangeName("");
    setOnChangeAge("");
  };

  return (
    <Wrap cssStyles = {styles.input}>
    <div>
      <form onSubmit={onSubmitHandler}>
        <label>Enter user name</label>
        <input
          value={onChangeName}
          type="text"
          onChange={inputNameChangeHandler}
        ></input>
        <label>Enter user age</label>
        <input
          value={onChangeAge}
          type="number"
          onChange={inputAgeChangeHandler}
        ></input>
        <button type="submit">Add user</button>
      </form>
    </div>
    </Wrap>
  );
};

export default UserForm;
