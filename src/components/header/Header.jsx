import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import "./header.scss";

const Header = () => {
    let { pathname } = useLocation();

    const [showInput, setShowInput] = useState(false);
    if (pathname.includes("register") || pathname.includes("admin")) {
        return <></>;
    }
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
                                    <Link to={"/admin/manageProduct"}>
                                        <CiUser />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/order/cart"}>
                                        <CiShoppingCart />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/wishlist"}>
                                        <CiHeart />
                                    </Link>
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
