import React from "react";
import styles from "./Button.module.scss";

const Button = ({ text, ...props }) => {
  return (
    <button className={styles.Button} {...props}>
      {text}
    </button>
  );
};

export default Button;
