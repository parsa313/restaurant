import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  items: JSON.parse(localStorage.getItem("items")) || [],
  totalAmount: localStorage.getItem("totalAmount") || 0,
  isCartShown: false,
};

let cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.totalAmount += action.payload.price;
      let sameItemIndex = state.items.findIndex(
        (item) => action.payload.id === item.id
      );

      if (sameItemIndex === -1) {
        state.items.push({
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          number: 1,
        });
      } else {
        state.items[sameItemIndex].number++;
      }

      //update items on local storage
      localStorage.removeItem("items");
      localStorage.removeItem("totalAmount");

      localStorage.setItem("totalAmount", state.totalAmount);
      localStorage.setItem("items", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      state.totalAmount -= action.payload.price;

      let deleteItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      console.log(deleteItem);
      if (deleteItem.number > 1) {
        deleteItem.number--;
        console.log("more 1");
      } else if (deleteItem.number === 1) {
        let deleteItemIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        console.log("1");

        state.items.splice(deleteItemIndex, 1); //if there was only 1  item  of what we want to delet we totally delete it
      }

      //update items on local storage
      localStorage.removeItem("items");
      localStorage.removeItem("totalAmount");

      localStorage.setItem("totalAmount", state.totalAmount);
      localStorage.setItem("items", JSON.stringify(state.items));
    },

    showCartHandler: (state) => {
      state.isCartShown = true;
    },
    hideCartHandler: (state) => {
      state.isCartShown = false;
    },
  },
});

export default cartSlice;
