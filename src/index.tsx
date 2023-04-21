import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";

initializeApp({
  apiKey: "AIzaSyAQ9sG61YWgsEpUxPUpfSL4GhtYVPENW9k",
  authDomain: "sochialnetwork.firebaseapp.com",
  projectId: "sochialnetwork",
  storageBucket: "sochialnetwork.appspot.com",
  messagingSenderId: "230567419447",
  appId: "1:230567419447:web:855453c2ab58f3981ee9b2",
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
