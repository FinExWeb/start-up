import React from "react";

import './css/food.css'
import Card from '../Card/Card'
import Alert from "./Alert";
const Food = () => {
    return (
        <>
            <div className="restorant--foods my-5">
                <Alert />
                <div className="cards my-5 flex-column">
                    <h1>PREMIUM BURGER</h1>
                    <div className="cardContainer my-5 d-flex align-items-star flex-wrap">
                        <Card />
                    </div>
                    <h1>issiq lavash</h1>
                    <div className="cardContainer my-5 d-flex align-items-star flex-wrap">
                        <Card />
                    </div>
                    <h1>coffee</h1>
                    <div className="cardContainer my-5 d-flex align-items-star flex-wrap">
                        <Card />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Food;