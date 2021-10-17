import React from "react";
import Logo from "../../Logo/Logo";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={`${styles.footer} container-fluid`}>
      <div className="row">
        <div className={`col-md-3 text-center ${styles.footer__logo}`}>
         <Logo/>
        </div>
        <div className="col-md-3">
          <ul>
            <li>location</li>
            <li>menu</li>
            <li>about</li>
          </ul>
        </div>
        <div className="col-md-3">
          <ul>
            <li>contact</li>
            <li>contact@foody.eat</li>
            <li>+62 321 456 23</li>
          </ul>
        </div>
        <div className="col-md-3 d-flex align-items-center">
          <ul className={styles.apps}>
            <li>
              <i class="fab fa-instagram fa-lg"></i>
            </li>
            <li>
              <i class="fab fa-twitter fa-lg"></i>
            </li>
            <li>
              <i class="fab fa-telegram-plane fa-lg"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
