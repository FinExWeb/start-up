import React from "react";
import FoodIcon from "./MenuImages/Food-icon.svg";
import "./Menu.css";
import Card from "../Card/Card";
function Menu() {
  return (
    <>
      <div className="container">
        <h3 className="text-center my-3">
          ENG YAXSHI <span> OVQATLAR</span> FAQAT <span>SIZ UCHUN</span>!{" "}
          <img src={FoodIcon} alt="FoodIcon" />
        </h3>
        <div className="cards my-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default Menu;
