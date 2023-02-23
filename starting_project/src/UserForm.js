import React, { useState } from "react";
import ErrorModule from "./ErrorModule/ErorrModule";
import Button from "./UI/Button";
import Wrap from "./UI/Wrap";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const [onChangeName, setOnChangeName] = useState("");
  const [onChangeAge, setOnChangeAge] = useState("");
  const [error, setError] = useState();

  const inputNameChangeHandler = (e) => {
    setOnChangeName(e.target.value);
  };
  const inputAgeChangeHandler = (e) => {
    setOnChangeAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (onChangeName.trim().length === 0 || onChangeAge.trim().length === 0) {
      setError({
        title: "Empty name input",
        message: "There is not any characters in your name inpet, enter smth",
      });
      return;
    }

    if (onChangeAge < 1) {
      setError({
        title: "Wrong or empty age input",
        message:
          "There is not any characters in your age input or u passed non-existent age (< 1), enter another age",
      });
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
    <div>
      {error && (
        <ErrorModule
          onGettingErrorHandler={errorHandler}
          title={error.title}
          message={error.message}
        ></ErrorModule>
      )}
      <Wrap className={styles.input}>
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
            <Button type="submit">Add user</Button>
          </form>
        </div>
      </Wrap>
    </div>
  );
};

export default UserForm;
