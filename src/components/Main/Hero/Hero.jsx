import React from "react";
import "../Main.css";

// Import main images
import HeroImage from "../Main-images/Hero-image.png";
import { Link } from "react-router-dom";
// Import main images

function Hero() {
  return (
    <div className="container hero">
      <div className="row">
        <div className="content--hero col-md-6 col-sm-12">
          <section className="d-flex align-items-center user">
            <hr style={{ width: "50px", height: "2px" }} />
            <span className="text-uppercase">OVER 1000 USERS</span>
          </section>
          <div className="content col-md-12 my-4">
            <h1 className="my-3">
              Bugun barcha <span>ovqatlar</span> siz uchun
            </h1>
            <p style={{ letterSpacing: "0" }}>
              START-BURGER.UZ restoranida barcha ovqatlar uchun ajoyib
              qo’shimchalar mavjud. Eng sifatli ovqatlar va tez yetkazib berish
              xizmati faqat START-BURGER.UZda!
            </p>
          </div>
          <section className="buttonProVersion my-5">
            <Link to="/menu">
              <button>Ovqatlar!</button>
            </Link>
            <Link to="/error">
              <button>Pro Versiya</button>
            </Link>
          </section>
        </div>
        <div className="hero--images col-md-6 col-sm-12">
          <img src={HeroImage} alt="HeroImage" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
