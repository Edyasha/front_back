import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./SignUp.module.scss";
import styles from "./SignUp.module.scss";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { setUser } from "../../store/userSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({});

  const onSubmit = (data) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/admin");
      })
      .catch(console.error);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.RegisterBox}>
        <h3 className={styles.TitlePage}>Реєстрація</h3>
        <Input
          type="text"
          placeholder="login"
          register={{ ...register("login", { required: true }) }}
        />
        <div className={styles.ErrMessage}>
          {errors?.login && <p>Поле обов'язкове до заповнення!</p>}
        </div>
        <Input
          type="email"
          placeholder="e-mail"
          register={{ ...register("email", { required: true }) }}
        />
        <div className={styles.ErrMessage}>
          {errors?.email && <p>Поле обов'язкове до заповнення!</p>}
        </div>
        <Input
          type="text"
          placeholder="phone"
          register={{ ...register("phone", { required: true }) }}
        />
        <div className={styles.ErrMessage}>
          {errors?.phone && <p>Поле обов'язкове до заповнення!</p>}
        </div>
        <Input
          type="password"
          placeholder="password"
          register={{ ...register("password", { required: true }) }}
        />
        <div className={styles.ErrMessage}>
          {errors?.password && <p>Поле обов'язкове до заповнення!</p>}
        </div>
        <Button text={"Зареєструватись"} />
      </form>
    </div>
  );
};

export default SignUp;
