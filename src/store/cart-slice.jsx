import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  items: [],
  totalAmount: 0,
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
    },
    removeItem: (state, action) => {
      state.totalAmount -= action.payload.price;

      let deleteItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (deleteItem.number > 1) {
        deleteItem.number--;
      }
      if (deleteItem.number === 1) {
        let deleteItemIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        );

        state.items.splice(deleteItemIndex, 1); //if there was only 1  item  of what we want to delet we totally delete it
      }
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