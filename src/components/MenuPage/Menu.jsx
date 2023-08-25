import React from "react";
import FoodIcon from "./MenuImages/Food-icon.svg";
import "./Menu.css";
import Card from "../Card/Card";
function Menu() {
  return (
    <>
      <div className="container">
        <p className="text-center my-3 fs-2">
          ENG YAXSHI <span> OVQATLAR</span> FAQAT <span>SIZ UCHUN</span>!
          <img style={{position: 'relative', bottom: '10px'}} src={FoodIcon} alt="FoodIcon" />
        </p>
        <div className="cards my-5">
          <Card />
        </div>
      </div>
    </>
  );
}

export default Menu;
