import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./Header.module.css";
import Logo from "./../Logo/Logo";
import Shopicon from "./../ui/shopicon/Shopicon";

function Header(props) {
  const islogedin = useSelector((state) => state.login.islogedin);

  return (
    <nav className={`${styles.header} container`}>
      <Logo />

      <ul className={styles.header__list}>
        <li>
          <NavLink
            activeStyle={{
              fontWeight: "bold",
              color: "#e56b6f",
            }}
            to="/home"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{
              fontWeight: "bold",
              color: "#e56b6f",
            }}
            to="/menu"
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            className="d-none d-md-block"
            activeStyle={{
              fontWeight: "bold",
              color: "#e56b6f",
            }}
            to="/AboutUs"
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            className="d-none d-md-block"
            activeStyle={{
              fontWeight: "bold",
              color: "#e56b6f",
            }}
            to="/Contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <ul className={styles.header__list}>
        {islogedin && (
          <li>
            <Shopicon />
          </li>
        )}
        {!islogedin && (
          <li>
            <NavLink to="/login">
              <button className={styles.button}>Sign Up</button>
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Header;
