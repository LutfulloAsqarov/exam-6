import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./order.scss";

const Order = () => {
    const pathnames = ["cart", "check", "complete"];
    let { pathname } = useLocation();
    pathname = pathname.split("/")[2];
    let index = pathnames.findIndex((text) => text === pathname);

    let completed = { color: "green", borderBottom: "2px solid green" };
    let disabled = { color: "#aaa", borderBottom: "2px solid transparent" };
    let active = { color: "#000", borderBottom: "2px solid #000" };

    return (
        <div className="order">
            <h2
                className="section__title"
                style={{ textAlign: "center", paddingTop: "30px" }}
            >
                CART
            </h2>

            <div className="upTab">
                <ul className="upTab__list">
                    <li
                        style={
                            index > 0
                                ? completed
                                : index === 0
                                ? active
                                : disabled
                        }
                        className="upTab__list__item"
                    >
                        Shopping cart
                    </li>
                    <li
                        style={
                            index > 1
                                ? completed
                                : index === 1
                                ? active
                                : disabled
                        }
                        className="upTab__list__item"
                    >
                        Check out Details
                    </li>
                    <li
                        style={
                            index > 2
                                ? completed
                                : index === 2
                                ? active
                                : disabled
                        }
                        className="upTab__list__item"
                    >
                        Order Complete
                    </li>
                </ul>
            </div>
            <Outlet />
        </div>
    );
};

export default Order;
