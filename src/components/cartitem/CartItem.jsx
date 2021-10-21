import classes from "./cartitem.module.css";
import Button from "../ui/button/Button";
import { useSelector, useDispatch } from "react-redux";
import cartSlice from "../../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const price = `$${props.price.toFixed(2)}`;

  let addItemHandler = () => {
    dispatch(
      cartSlice.actions.addItem({
        id: props.id,
        name: props.name,
        price: props.price,
      })
    );
  };
  let removeItemHandler = () => {
    dispatch(
      cartSlice.actions.removeItem({ id: props.id, price: props.price })
    );
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.number}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <Button className="mb-1 mb-md-0" onClick={removeItemHandler}>−</Button>
        <Button onClick={addItemHandler} className="ms-2">+</Button>
      </div>
    </li>
  );
};

export default CartItem;
