import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";

import Shopicon from "./../ui/shopicon/Shopicon";

function Header(props) {
  return (
    <nav className={`${styles.header} container`}>
      <span className={styles.logocontainer}>
        f<span className={styles.red}>oo</span>dy
      </span>

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
        <li>
          <Shopicon/>
        </li>
        <li>
          <NavLink to="/login"><button className={styles.button}>Sign Up</button></NavLink>
        </li>
      </ul>
    </nav>

  );
}

export default Header;
