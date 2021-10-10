import React from "react";
import { Fragment } from "react";
import styles from "./introduce.module.css";
import easy from "./../../assets/easy.jpg";
import quality from "./../../assets/quality.jpg";
import delivery from "./../../assets/delivery.jpg";

function Introduce() {
  return (
    <Fragment>
      <div className={`container text-center ${styles.introduce}`}>
        <p className={styles.text}>what we serve</p>
        <h2 className={styles.title}>your favorite food delievery partner</h2>
        <ul className={styles.list}>
          <div className="row">
            <li className="col-md-4">
              <img className="img-fluid" src={easy} alt="easy" />
              <p>easy to order</p>
            </li>
            <li className={`col-md-4 ${styles.mid}`}>
              <img className="img-fluid" src={delivery} alt="delivery" />
              <p>fastest delivery</p>
            </li>
            <li className="col-md-4">
              <img className="img-fluid" src={quality} alt="quality" />
              <p>best quality</p>
            </li>
          </div>
        </ul>
      </div>
    </Fragment>
  );
}

export default Introduce;

