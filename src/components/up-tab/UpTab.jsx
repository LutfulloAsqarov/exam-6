import React from "react";
import { NavLink } from "react-router-dom";
import "./upTab.scss";

const UpTab = () => {
    return (
        <div className="upTab">
            <ul className="upTab__list">
                <li className="upTab__list__item">
                    <NavLink className={"upTab__list__link"} to={"cart"}>
                        Shopping cart
                    </NavLink>
                </li>
                <li className="upTab__list__item">
                    <NavLink className={"upTab__list__link"} to={"check"}>
                        Check out Details
                    </NavLink>
                </li>
                <li className="upTab__list__item">
                    <NavLink className={"upTab__list__link"} to={"complete"}>
                        Order Complete
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default UpTab;
