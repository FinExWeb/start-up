import React from "react";
import truck from './img/truck.svg'
import check from './img/check.svg'
import order from './img/order.svg'
import './css/food.css'
import { Link } from "react-router-dom";
const Alert = () => {
    return (
        <div className="input--alert">
            <div className="alerts">
                <img src={truck} alt="truck" />
                <section>
                    <h4 className="text-uppercase">yetkazib berish hizmati mavjud:</h4>
                    <h4 className="text-uppercase">yetkazib berish 10.000 so’mdan boshlanadi!</h4>
                </section>
                <img src={check} alt="check" />
            </div>
            <Link to='/restaurant/user-order' className="alerts text-decoration-none">
                <img src={order} alt="order" />
                <section>
                    <h4 className="text-uppercase">buyurtmalarni <br />ko’rish</h4>
                </section>
            </Link>
        </div>
    )
}

export default Alert