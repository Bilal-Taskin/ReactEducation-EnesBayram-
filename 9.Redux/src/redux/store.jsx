import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/counterSlice";

//configurestore bizim tanımladığımız slice'ları toplayan bir fonksiyondur
export const store = configureStore({
  reducer: {
    counter: counterReducer, //counter sliceımıza verdiğimiz isimdir
  },
});
