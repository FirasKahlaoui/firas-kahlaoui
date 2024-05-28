/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";

import App from "./App";
import "./globals.css";

const firebaseConfig = {
  apiKey: "AIzaSyCqWQMUsb17pA1MNEujtSA5egZ1h_EG0PA",
  authDomain: "portfoliocontact-a58a9.firebaseapp.com",
  databaseURL: "https://portfoliocontact-a58a9-default-rtdb.firebaseio.com",
  projectId: "portfoliocontact-a58a9",
  storageBucket: "portfoliocontact-a58a9.appspot.com",
  messagingSenderId: "780479352533",
  appId: "1:780479352533:web:7ac49509f6a276b45d1c5c"
};


initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);