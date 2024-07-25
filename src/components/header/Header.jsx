import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import "./header.scss";

const Header = () => {
    const [showInput, setShowInput] = useState(false);
    return (
        <>
            <header id="header">
                <div className="container">
                    <div className="header">
                        <div className="header__logo">
                            <Link to={"/"}>
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                        <ul className="header__list">
                            <li className="header__list__item">
                                <NavLink
                                    className={"header__list__link"}
                                    to={"/"}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="header__list__item">
                                <NavLink
                                    className={"header__list__link"}
                                    to={"/shop"}
                                >
                                    Shop
                                </NavLink>
                            </li>
                            <li className="header__list__item">
                                <NavLink
                                    className={"header__list__link"}
                                    to={"/blog"}
                                >
                                    Blog
                                </NavLink>
                            </li>
                            <li className="header__list__item">
                                <NavLink
                                    className={"header__list__link"}
                                    to={"/contact"}
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                        <div className="header__icons">
                            <form
                                action=""
                                className={`${showInput ? "show" : ""}`}
                            >
                                <input type="text" placeholder="search..." />
                            </form>
                            <ul>
                                <li onClick={() => setShowInput((p) => !p)}>
                                    {showInput ? <IoMdClose /> : <CiSearch />}
                                </li>
                                <li>
                                    <CiUser />
                                </li>
                                <li>
                                    <CiShoppingCart />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
