import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./Sign-In.module.scss";
import styles from "./Sign-In.module.scss";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { NavLink } from "react-router-dom";
import { setUser } from "../../store/userSlice";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({});

  const onSubmit = (data) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        reset();
        navigate("/admin");
      })
      .catch(() => alert("Invalid User!!!"));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.LoginBox}>
        <h3 className={styles.TitlePage}>Вхід</h3>
        <Input
          type={"text"}
          placeholder={"e-mail"}
          register={{ ...register("email", { required: true }) }}
        />
        <div className={styles.ErrMessage}>
          {errors?.email && <p>Поле обов'язкове до заповнення!</p>}
        </div>
        <Input
          type={"password"}
          placeholder={"password"}
          register={{ ...register("password", { required: true }) }}
        />
        <div className={styles.ErrMessage}>
          {errors?.password && <p>Поле обов'язкове до заповнення!</p>}
        </div>
        <Button text={"Увійти"} />
        <NavLink className={styles.LinkRegister} to="/sign-up">
          Зареєструватись
        </NavLink>
      </form>
    </div>
  );
};

export default SignIn;
