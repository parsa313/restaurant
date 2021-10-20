import React from "react";
import styles from "./cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "./../ui/button/Button";
import CartItem from "../cartitem/CartItem";
import cartSlice from "../../store/cart-slice";

function Cart() {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const items = useSelector((state) => state.cart.items);
  const hasItem=items.length>0
  const dispatch = useDispatch();
  const hideCartHandler = () => {
    dispatch(cartSlice.actions.hideCartHandler());
  };
  return (
    <>
      <ul className={styles["cart-items"]}>
        {items.map((item) => {
          return (
            <CartItem
              price={item.price}
              name={item.name}
              id={item.id}
              number={item.number}
              key={item.id}
            />
          );
        })}
      </ul>

      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}$</span>
      </div>

      <div className={styles.actions}>
        <Button onClick={hideCartHandler}>Close</Button>
        {hasItem &&<Button className="ms-2">Order</Button>}  {/* show order button when we have at least one item */}
      </div>
     
    </>
  );
}

export default Cart;
