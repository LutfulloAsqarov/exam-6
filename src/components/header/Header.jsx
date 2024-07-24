import React from "react";
import logo from "../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import "./header.scss";

const Header = () => {
    return (
        <>
            <header id="header">
                <div className="container">
                    <div className="header">
                        <div className="header__logo">
                            <Link>
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                        <ul className="header__list">
                            <li className="header__list__item">
                                <NavLink to={"/"}>Home</NavLink>
                            </li>
                            <li className="header__list__item">
                                <NavLink to={"/"}>Shop</NavLink>
                            </li>
                            <li className="header__list__item">
                                <NavLink to={"/"}>Blog</NavLink>
                            </li>
                            <li className="header__list__item">
                                <NavLink to={"/"}>Contact Us</NavLink>
                            </li>
                        </ul>
                        <div className="header__icons">
                            <span>
                                <CiSearch />
                            </span>
                            <span>
                                <CiUser />
                            </span>
                            <span>
                                <CiShoppingCart />
                            </span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
