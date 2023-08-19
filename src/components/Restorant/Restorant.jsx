import React from "react";
import "./restorant.css";
import Brand from "../Navbar/navbar-icons/Brend.svg";
import QR from "./Background/qr.png";
import burger from "./Background/Icons/burger.svg";
import borderCoffe from "./Background/Icons/borderCoffe.svg";
import website from "./Background/Icons/website.svg";
import heart from './Background/Icons/heart.svg'
import brokenHEart from './Background/Icons/brokenHEart.svg'
const Restorant = () => {
  return (
    <>
      <div className="restorant">
        <div className="cards">
          <div className="left">
            <div className="logo">
              <img src={Brand} alt="Brand" />
            </div>
            <div className="qr">
              <img className="w-50" src={QR} alt="QR" />
            </div>
          </div>
          <div className="right">
            <div className="restorant-name d-flex align-items-center">
              <img src={burger} alt="burger" />
              <h4>STAR BURGER</h4>
            </div>
            <ul>
              <li className="d-flex align-items-center">
                <img src={borderCoffe} alt="borderCoffe" />
                <span>Mazali burger</span>
              </li>
              <li className="d-flex align-items-center">
                <img src={borderCoffe} alt="borderCoffe" />
                <span>Issiq hot-dog</span>
              </li>
              <li className="d-flex align-items-center">
                <img src={borderCoffe} alt="borderCoffe" />
                <span>Tayyor chessburger</span>
              </li>
              <li className="d-flex align-items-center">
                <img src={borderCoffe} alt="borderCoffe" />
                <span>20 - 30 daqiqa</span>
              </li>
            </ul>
            <div className="footer-text">
              <div className="d-flex align-items-center">
                <img src={website} alt="website" />
                <h5>www.star-burger.uz</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="buttonsLike d-flex align-items-center">
          <button>OVQATLARNI KO’RISH VA BUYURTMA QILISH</button>
          <section id="like-dislike">
            <button>
                <img src={heart} alt="" />
            </button>
            <button>
                <img src={brokenHEart} alt="" />
            </button>
          </section>
        </div>
      </div>
    </>
  );
};

export default Restorant;
