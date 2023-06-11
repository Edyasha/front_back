import React from "react";
import { Navigate } from "react-router-dom";
import styles from "./Admin.module.scss";
import useAuth from "../../hooks/use-auth";

const Admin = () => {
  const { isAuth } = useAuth();

  return !isAuth ? (
    <>
      <Navigate to="/sign-in" />
    </>
  ) : (
    <div>
      <h3>Це ваш особистий кабінет!</h3>
    </div>
  );
};

export default Admin;
