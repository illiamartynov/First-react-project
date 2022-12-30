import React from "react";
import styles from "../UI/Wrap.module.css";

const Wrap = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
};

export default Wrap;
