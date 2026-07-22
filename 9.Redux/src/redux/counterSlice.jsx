import { createSlice } from "@reduxjs/toolkit";
import { validators } from "tailwind-merge";

//statlerimizi slice içinde tutarız
const initialState = {
  value: 30,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    /*burada fonksiyonlarımızı tutarız*/
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
