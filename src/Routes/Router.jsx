import React from "react";
import { Route, Routes } from "react-router-dom";
import MenuPage from "../components/MenuPage/Menu";
import HeaderElement from "../components/HeaderElement";
import Problem from "../components/ProblemPage/Problem";
import Error from "../components/Error/Error";
import Login from "../components/Authorization/Login/Login";
import Register from "../components/Authorization/Register/Register";
import Food from "../components/RestorantFood/Food";
function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HeaderElement />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/problems" element={<Problem />} />
        <Route path="/error" element={<Error />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/restaurant/star-burger" element={<Food/>}/>
        {/* <Route path="" element={}/> */}
      </Routes>
    </div>
  );
}

export default Router;
