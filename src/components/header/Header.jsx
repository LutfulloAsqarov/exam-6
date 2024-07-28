import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import "./header.scss";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { useGetValue } from "../../hooks/useGetValue";
import { useGetProductsQuery } from "../../context/api/productApi";

const Header = () => {
    let { pathname } = useLocation();
    const [showInput, setShowInput] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const { data, isError } = useGetProductsQuery({
        search: searchValue.trim(),
    });
    // const { formData, handleChange } = useGetValue();
    if (pathname.includes("register") || pathname.includes("admin")) {
        return <></>;
    }
    return (
        <>
            <header id="header">
                <div className="container">
                    <div className="header">
                        <div className="header__logo">
                            <FaBars onClick={() => setToggle(true)} />
                            <Link to={"/"}>
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                        <ul className={`header__list ${toggle ? "show" : ""}`}>
                            <div className="header__list__toggle">
                                <div className="header__list__toggle-header">
                                    <img src={logo} alt="logo" />
                                    <IoClose onClick={() => setToggle(false)} />
                                </div>
                                <div className="header__list__toggle-input">
                                    <input
                                        type="text"
                                        placeholder="search..."
                                    />
                                </div>
                            </div>
                            <li
                                className="header__list__item"
                                onClick={() => setToggle(false)}
                            >
                                <NavLink
                                    className={"header__list__link"}
                                    to={"/"}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li
                                className="header__list__item"
                                onClick={() => setToggle(false)}
                            >
                                <NavLink
                                    className={"header__list__link"}
                                    to={"/shop"}
                                >
                                    Shop
                                </NavLink>
                            </li>
                            <li
                                className="header__list__item"
                                onClick={() => setToggle(false)}
                            >
                                <NavLink
                                    className={"header__list__link"}
                                    to={"/blog"}
                                >
                                    Blog
                                </NavLink>
                            </li>
                            <li
                                className="header__list__item"
                                onClick={() => setToggle(false)}
                            >
                                <NavLink
                                    className={"header__list__link"}
                                    to={"/contact"}
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            <div className="header__list__toggle-bot">
                                <li
                                    className="header__list__item header__list__toggle-bot-item "
                                    onClick={() => setToggle(false)}
                                >
                                    <Link to={"/order/cart"}>
                                        Cart
                                        <CiShoppingCart />
                                    </Link>
                                </li>
                                <li
                                    className="header__list__item  header__list__toggle-bot-item"
                                    onClick={() => setToggle(false)}
                                >
                                    <Link to={"/wishlist"}>
                                        Wishlist
                                        <CiHeart />
                                    </Link>
                                </li>
                                <button onClick={() => setToggle(false)}>
                                    Sign In
                                </button>
                            </div>
                        </ul>
                        {toggle ? (
                            <div
                                className="outlet"
                                onClick={() => setToggle(false)}
                            ></div>
                        ) : (
                            <></>
                        )}
                        <div className="header__icons">
                            <form
                                action=""
                                className={`${showInput ? "show" : ""}`}
                            >
                                <input
                                    type="text"
                                    placeholder="search..."
                                    name="search"
                                    value={searchValue}
                                    onChange={(e) =>
                                        setSearchValue(e.target.value)
                                    }
                                />
                                {searchValue ? (
                                    <div className="header__search">
                                        {!isError
                                            ? data?.map((el) => (
                                                  <Link
                                                      to={`products/${el.id}`}
                                                      key={el.id}
                                                      className="header__search__items"
                                                  >
                                                      <img
                                                          src={el.images[0]}
                                                          alt=""
                                                          width={50}
                                                      />
                                                      <p>{el.title}</p>
                                                  </Link>
                                              ))
                                            : "No data"}
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </form>
                            <ul>
                                <li
                                    className="header__icons__item"
                                    onClick={() => setShowInput((p) => !p)}
                                >
                                    {showInput ? <IoMdClose /> : <CiSearch />}
                                </li>
                                <li className="header__icons__item">
                                    <Link to={"/admin/manageProduct"}>
                                        <CiUser />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/order/cart"}>
                                        <CiShoppingCart />
                                    </Link>
                                </li>
                                <li className="header__icons__item">
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
