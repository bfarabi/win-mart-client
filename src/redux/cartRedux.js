import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    // removeProduct: (state, action) => {
    //   state.quantity -= 1;
    //   state.products.filter((product) => product._id  !==  action.payload);
    //   state.total -= action.payload.price * action.payload.quantity;
    // //  delete state.products[action.payload];
   
    // },
    userLogout:(state) => {
      state.products= [];
    state.quantity = 0;
    state.total = 0
    },
  },
});

export const {addProduct, userLogout } = cartSlice.actions;
export default cartSlice.reducer;
