import React from "react";
import styles from "./card.module.css";
import { useDispatch } from "react-redux";
import cartSlice from "../../store/cart-slice";

function Card(props) {
  const dispatch = useDispatch();
  let addHandler = () => {
    dispatch(
      cartSlice.actions.addItem({
        id: props.id,
        price: props.price,
        name: props.title,
      })
    );
  };
  return (
    <div className={`${styles.card} col-md-4 col-lg-2`}>
      <img {...props.img} className={`${styles["card-img"]} card-img-top`} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
      </div>
      <div className={`${styles["card-footer"]}`}>
        <span className={styles.add} onClick={addHandler}>
          <i class="fas fa-plus fa-md"></i>
        </span>
        <span>{props.price}$</span>
      </div>
    </div>
  );
}

export default Card;
