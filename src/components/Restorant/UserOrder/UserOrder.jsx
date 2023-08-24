import React from "react";
import './Order.css'
import { Container } from "reactstrap";
import order from '../../RestorantFood/img/order.svg'
import OrderCard from './OrderCard'
const UserOrder = () => {
    return (
        <>
            <Container className="user---order my-5">
                <div className="alertContainer d-flex align-items-center">
                    <div className="alerts">
                        <img src={order} alt="order" />
                        <section>
                            <h4 className="text-uppercase">MENING <br />
                                BUYURTMLARIM</h4>
                        </section>
                    </div>
                    <div className="alerts">
                        <h4 className="text-center">sizda 12 ta <br /> buyurtma mavjud</h4>
                    </div>
                </div>
                <div className="cardContainer">
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                </div>
            </Container>
        </>
    )
}

export default UserOrder;