import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import MyHome from "./components/MyHome";
import AboutUs from "./components/AboutUs";
import LoginNew from "./components/LoginNew";
import MyRegister from "./components/MyRegister";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<MyHome/>}></Route>
          <Route path="/about" element={<AboutUs/>}></Route>
          <Route path="/login" element={<LoginNew/>}></Route>
          <Route path="/register" element={<MyRegister/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
