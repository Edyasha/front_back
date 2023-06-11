import React from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import useAuth from "../../hooks/use-auth";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/userSlice";

const Header = () => {
  const { isAuth } = useAuth();
  const dispatch = useDispatch();

  return (
    <div className={styles.HeaderBox}>
      <div className={styles.Header}>
        <img className={styles.Header_logo} src={logo} alt="Логотип" />
        <div className={styles.Header_nav}>
          <NavLink to="/">Домашня</NavLink>
          <NavLink to="/catalog">Каталог</NavLink>
          <NavLink to="/about">Про нас</NavLink>
          <NavLink to="/admin">Кабінет</NavLink>
        </div>
        <div className={styles.Header_authorization}>
          {!isAuth ? (
            <>
              <NavLink to="/sign-in">Вхід</NavLink>
              <NavLink to="/sign-up">Реєстрація</NavLink>
            </>
          ) : (
            <NavLink className={styles.OutButton} onClick={() => dispatch(removeUser())}>вийти</NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
