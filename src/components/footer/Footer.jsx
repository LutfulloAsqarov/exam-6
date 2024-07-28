import React from "react";
import footerLogo from "../../assets/footer-logo.svg";
import "./footer.scss";
import { NavLink, useLocation } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    let { pathname } = useLocation();

    if (pathname.includes("login") || pathname.includes("admin")) {
        return <></>;
    }
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer">
                    <div className="footer__top">
                        <div className="footer__logo">
                            <img src={footerLogo} alt="logo" />
                            <p>Gift & Decoration Store</p>
                        </div>
                        <ul className="footer__list">
                            <li className="footer__list__item">
                                <NavLink to={"/"}>Home</NavLink>
                            </li>
                            <li className="footer__list__item">
                                <NavLink to={"/"}>Shop</NavLink>
                            </li>
                            <li className="footer__list__item">
                                <NavLink to={"/"}>Blog</NavLink>
                            </li>
                            <li className="footer__list__item">
                                <NavLink to={"/"}>Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__bot">
                        <div className="footer__bot__left">
                            <p>Copyright © 2023 3legant. All rights reserved</p>
                        </div>
                        <div className="footer__bot__right">
                            <FaInstagram />
                            <FaFacebookF />
                            <FaYoutube />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
