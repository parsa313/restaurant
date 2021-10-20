import React from "react";
import styles from "./modal.module.css";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import cartSlice from "../../../store/cart-slice";

const overlaysElement = document.getElementById("overlays");

const ModalOverlay = (props) => (
  <div className={styles.modal}>{props.children}</div>
);

function Modal(props) {
  const dispatch = useDispatch();
  const hideCartHandler = () => {
    dispatch(cartSlice.actions.hideCartHandler());
  };
  const Backdrop = () => (
    <div className={styles.backdrop} onClick={hideCartHandler}></div>
  );

  return (
    <>
      {createPortal(<Backdrop />, overlaysElement)}
      {createPortal(
        <ModalOverlay> {props.children} </ModalOverlay>,
        overlaysElement
      )}
    </>
  );
}

export default Modal;
