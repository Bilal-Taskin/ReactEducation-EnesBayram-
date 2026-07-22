import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/counterSlice";
import userReducer from "../redux/userSlice";

//configurestore bizim tanımladığımız slice'ları toplayan bir fonksiyondur
export const store = configureStore({
  reducer: {
    counter: counterReducer, //counter sliecımıza verdiğimiz isimdir
    user: userReducer,
  },
});
