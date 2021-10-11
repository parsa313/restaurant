import React from "react";
import styles from "./card.module.css";
function Card(props) {
  return (
    <div className={`${styles.card} col-md-4 col-lg-2`}>
      <img {...props.img} className={`${styles["card-img"]} card-img-top`} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
      </div>
      <div className={`${styles["card-footer"]}`}>
        <span className={styles.add}>
          <i class="fas fa-plus fa-md"></i>
        </span>
        <span>{props.price}$</span>
      </div>
    </div>
  );
}

export default Card;
