import React from "react";
import Wrap from "../UI/Wrap";
import Button from '../UI/Button'
import styles from './ErrorModule.module.css'


const ErrorModule = (props) => {
  return (
    <div>
      <div onClick = {props.onGettingErrorHandler} className= {styles.backdrop} />
    <Wrap className = {styles.modal}>
      <header className = {styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className = {styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className= {styles.actions}>
        <Button onClick = {props.onGettingErrorHandler}>Okay</Button>
      </footer>
    </Wrap>
    </div>
  );
};

export default ErrorModule;
