import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./Header.module.css";

import Shopicon from "./../ui/shopicon/Shopicon";
import Logo from "../../Logo/Logo";

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
            activeStyle={{
              fontWeight: "bold",
              color: "#e56b6f",
            }}
            to="/h"
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{
              fontWeight: "bold",
              color: "#e56b6f",
            }}
            to="/p"
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
        <li>
          <NavLink to="/login">
            <button className={styles.button}>Sign Up</button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
