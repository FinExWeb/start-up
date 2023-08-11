import React from "react";
import cardFood from "./FoodImage.png";
import "./card.css";
import star from "./icon/star.svg";
import plus from "./icon/plus.svg";

function Card() {
  return (
    <>
      <div className="card">
        <img className="cardFood" src={cardFood} alt="cardFood" />
        <div className="content">
          <h4>Tovuqli Salad</h4>
          <section className="d-flex align-items-center">
            <span>24min</span>
            <span>•</span>
            <img src={star} alt="star" />
            <span>5.0</span>
          </section>
        </div>
        <section className="my-2 d-flex justify-content-between align-items-center">
          <h3>13.000 so'm</h3>
          <button style={{width: 'auto'}}>
            <img src={plus} alt="" />
          </button>
        </section>
      </div>
    </>
  );
}

export default Card;
