import React from "react";
import "./Problem.css";
import FoodIcon from "./ProblemIcon/Sponsor.svg";
function Problem() {
  return (
    <>
      <div className="container forms-app">
        <p className="text-center my-3 text-uppercase fs-2">
          mijozlarni<span> qo'llab quvvatlash</span> markazi
          <img
            style={{ position: "relative", bottom: "5px" }}
            src={FoodIcon}
            alt="FoodIcon"
          />
        </p>
        <form className="d-flex flex-column align-items-center justify-content-center my-5">
          <input type="text" placeholder="fio" />
          <input type="text" placeholder="email kiritng yoki telefon raqam" />
          <textarea placeholder="qanday muammo mavjud?"></textarea>
          <button>Yuborish</button>
        </form>
      </div>
    </>
  );
}

export default Problem;
