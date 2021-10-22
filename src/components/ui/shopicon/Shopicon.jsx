import React from "react";
import styles from "./shopicon.module.css";
import { useSelector, useDispatch } from "react-redux";
import cartSlice from "../../../store/cart-slice";
import { useEffect, useState } from "react";

function Shopicon() {
  const [iconIsHighlighted, seticonIsHighlighted] = useState(false);

  let iconContainerClass = `${styles.iconcontainer} ${
    iconIsHighlighted ? styles.bump : ""
  }`;
  let cartItems = useSelector((state) => state.cart.items);
  let totalCartNumber = cartItems.reduce((prevvalue, item) => {
    return prevvalue + item.number;
  }, 0);
  const dispatch = useDispatch();
  useEffect(() => {
    seticonIsHighlighted(true);
    const timer = setTimeout(() => {
      seticonIsHighlighted(false);

      return () => clearTimeout(timer);
    }, 300);
  }, [totalCartNumber]);
  const showModalHandler = () => {
    dispatch(cartSlice.actions.showCartHandler());
  };

  return (
    <div className={iconContainerClass} onClick={showModalHandler}>
      <i class={`fas fa-shopping-cart fa-lg ${styles.icon}`}></i>
      <span className={styles.number}>{totalCartNumber}</span>
    </div>
  );
}

export default Shopicon;
