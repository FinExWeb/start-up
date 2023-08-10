import React from "react";
import { Route, Routes } from "react-router-dom";
import MenuPage from '../components/MenuPage/Menu'
import HeaderElement from "../components/HeaderElement";
function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HeaderElement />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </div>
  );
}

export default Router;