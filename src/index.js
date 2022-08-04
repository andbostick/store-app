import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import 'react-toastify/dist/ReactToastify.css'
import Products from "./Products";
import { ToastContainer } from "react-toastify";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartReducer from "./features/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/store" element={<Products />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
