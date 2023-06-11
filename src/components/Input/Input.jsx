import React from "react";
import styles from "./Input.module.scss";

const Input = ({ register, ...props }) => {
  return (
    <div className={styles.InputBox}>
      <input className={styles.Input} {...register} {...props} />
    </div>
  );
};

export default Input;
