import React from "react";
import truck from './img/truck.svg'
import check from './img/check.svg'
import order from './img/order.svg'
import './css/food.css'
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
            <div className="alerts">
                <img src={order} alt="order" />
                <section>
                    <h4 className="text-uppercase">buyurtmalarni <br />
                        ko’rish</h4>
                </section>
            </div>
        </div>
    )
}

export default Alert