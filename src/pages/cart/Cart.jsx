import React, { useEffect, useState } from "react";

import "./cart.scss";
import { useDispatch, useSelector } from "react-redux";
import {
    decrementCart,
    incrementCart,
    removeFromCart,
} from "../../context/slices/cartSlice";
// import { incrementCart } from "../../context/slice/cartSlice";
// import { Card } from "@mui/material";
import { IoClose } from "react-icons/io5";
// import CartModal from "../cart-modal";
import { Link } from "react-router-dom";

const Cart = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [voucher, setVoucher] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        if (openModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [openModal]);

    let dispatch = useDispatch();

    let cartData = useSelector((state) => state.cart.value);

    useEffect(() => {
        let total = cartData.reduce(
            (sum, el) => sum + el.price * el.quantity,
            0
        );
        setTotalPrice(+total.toFixed(2));
    }, [cartData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setVoucher(
            inputValue === "laylo"
                ? (totalPrice + Math.ceil(totalPrice * 0.02)) * 0.2
                : 0
        );
        setInputValue("");
    };

    return (
        <>
            {cartData.length ? (
                <div className="cart container">
                    <div className="cart__table">
                        <div className="cart__left">
                            <table>
                                <thead>
                                    <tr>
                                        <th>product</th>
                                        <th>Quantity</th>
                                        <th>price</th>
                                        <th>Sub total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartData?.map((cart) => (
                                        <tr key={cart.id} className="cart__row">
                                            <td>
                                                <div className="cart__product">
                                                    <button
                                                        onClick={() =>
                                                            dispatch(
                                                                removeFromCart(
                                                                    cart
                                                                )
                                                            )
                                                        }
                                                    >
                                                        <IoClose />
                                                    </button>
                                                    <img
                                                        src={cart.images[0]}
                                                        width={50}
                                                        alt=""
                                                    />
                                                    <p>{cart.title}</p>
                                                </div>
                                            </td>
                                            <td>
                                                <span>Qty:</span>
                                                <div className="cart__counter">
                                                    <button
                                                        onClick={() =>
                                                            dispatch(
                                                                decrementCart(
                                                                    cart
                                                                )
                                                            )
                                                        }
                                                    >
                                                        -
                                                    </button>
                                                    <div>{cart.quantity}</div>
                                                    <button
                                                        onClick={() =>
                                                            dispatch(
                                                                incrementCart(
                                                                    cart
                                                                )
                                                            )
                                                        }
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </td>
                                            <td>
                                                <span>Unit price:</span>
                                                <div>${cart.price}</div>
                                            </td>
                                            <td>
                                                <span>Price: </span> $
                                                {(
                                                    cart.price * cart.quantity
                                                ).toFixed(2)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <form onSubmit={handleSubmit} action="">
                                <input
                                    value={inputValue}
                                    onChange={(e) =>
                                        setInputValue(e.target.value)
                                    }
                                    type="text"
                                    placeholder="Voucher code"
                                />
                                <button>Redeem</button>
                            </form>
                        </div>
                        <div className="cart__totalPrice">
                            <ul>
                                <li>
                                    <span>Subtotal</span>
                                    <span>${totalPrice}</span>
                                </li>
                                <li>
                                    <span>Shipping fee (2%)</span>
                                    <span>${Math.ceil(totalPrice * 0.02)}</span>
                                </li>
                                <li>
                                    <span>Coupon (20%)</span>
                                    <span>{(+voucher).toFixed(2)}</span>
                                </li>
                            </ul>

                            <div>
                                <p>TOTAL</p>
                                <p>
                                    $
                                    {(
                                        totalPrice +
                                        Math.ceil(totalPrice * 0.02) -
                                        +voucher
                                    ).toFixed(2)}
                                </p>
                            </div>
                            <Link to={"/order/check"}>Check out</Link>
                        </div>
                    </div>
                    <div className="cart__shopping"></div>
                </div>
            ) : (
                <div
                    style={{
                        height: "400px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        gap: "30px",
                    }}
                >
                    <h1>No carts yet !</h1>
                    <Link
                        to={"/"}
                        style={{
                            padding: "10px",
                            background: "#33a0ff",
                            color: "#fff",
                        }}
                    >
                        Go home
                    </Link>
                </div>
            )}
        </>
    );
};

export default Cart;
