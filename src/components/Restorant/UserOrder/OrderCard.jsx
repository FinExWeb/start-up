import React from "react";
import food from '../../Card/FoodImage.png'
import './Order.css'

const OrderCard = () => {
    return (
        <>
            <div className="order---card">
                <div className="img">
                    <img src={food} alt="food" />
                </div>
                <div className="food--name">
                    <h3>CHESSBURGER</h3>
                    <span>STAR-BURGER</span>
                </div>
                <hr />
                <div className="food--since">
                    <h3>BUGRERLAR SONI:</h3>
                    <span>3 TA BURGER BUYURTMAGA QO’SHILGAN</span>
                </div>
                <hr />
                <div className="food--price">
                    <h3>NARXI</h3>
                    <span>410.000 MING SO’M</span>
                </div>
                <hr />
                <div className="food--button">
                    <button>YUBORISH</button>
                </div>
            </div>
        </>
    )
}

export default OrderCard