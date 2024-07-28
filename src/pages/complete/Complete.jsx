import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./complete.scss";
import { useNavigate } from "react-router-dom";
import { deleteAllCart } from "../../context/slices/cartSlice";

const Complete = () => {
    const cartData = useSelector((state) => state.cart.value);
    let navigate = useNavigate();
    let dispatch = useDispatch();
    console.log(cartData);
    let completeItems = cartData?.map((el) => (
        <div className="complete__card" key={el.id}>
            <img src={el.images[0]} alt="image" />
            <p>{el.quantity}</p>
        </div>
    ));
    return (
        <div id="complete">
            <div className="container">
                <div className="complete">
                    <p className="complete__subtitle">Thank you! 🎉</p>
                    <h2 className="complete__title">
                        Your order has been received
                    </h2>
                    <div className="complete__cards">{completeItems}</div>
                    <div className="complete__info">
                        <ul>
                            <li>Order code:</li>
                            <li>Date:</li>
                            <li>Total:</li>
                            <li>Payment method:</li>
                        </ul>
                        <ul>
                            <li>#0123_45678</li>
                            <li>October 19, 2023</li>
                            <li>$1,345.00</li>
                            <li>Credit Card</li>
                        </ul>
                    </div>
                    <button
                        onClick={() => {
                            localStorage.removeItem("cart");
                            dispatch(deleteAllCart());
                            navigate("/order/cart");
                        }}
                    >
                        Go Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Complete;
