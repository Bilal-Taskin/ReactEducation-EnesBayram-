import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";

createRoot(document.getElementById("root")).render(
  // REdux için gerekli. Amacı app componentinin redux tool kit içinde tanmılanan herşeye erişebilmesidir
  <Provider store={store}>
    <App />
  </Provider>,
);
