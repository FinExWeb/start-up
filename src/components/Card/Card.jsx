import React, { useEffect, useState } from "react";
import cardFood from "./FoodImage.png";
import "./card.css";
import plus from "./icon/plus.svg";

function Card() {
  const [FoodCard, setFoodCard] = useState([])

  useEffect(() => {
    fetch('https://burgeruz.onrender.com/foods')
      .then(res => res.json())
      .then(data => {
        const foodData = data.map(item => ({
          ...item
        }))
        setFoodCard(foodData)
      })
  }, [])

  return (
    <>
      {
        FoodCard.map((items) => (
          <div className="card">
            <img className="cardFood" src={cardFood} alt="cardFood" />
            <div className="content">
              <h4>{items.foodName}</h4>
              <section className="d-flex align-items-center">
                <span>250 Gramm</span>
              </section>
            </div>
            <section className="my-2 d-flex justify-content-between align-items-center">
              <h3>{items.price}</h3>
              <button style={{ width: 'auto' }}>
                <img src={plus} alt="" />
              </button>
            </section>
          </div>
        ))
      }
    </>
  );
}

export default Card;
