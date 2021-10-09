import React from "react";
import styles from './card.module.css'
function Card(props) {
  return (
    <div class="card">
      <img {...props.img} class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
      </div>
      <div className="card-footer">
        <button className={styles.button}>Add To Card</button>
        <span>{props.price}</span>
      </div>
    </div>
  );
}

export default Card;
