import React from "react";
import bannerImg from "../../../assets/banner/banner-img.png";
import { Link } from "react-router-dom";
import "./banner.scss";
const Banner = () => {
    return (
        <section id="banner">
            <div className="big-container">
                <div className="banner">
                    <div className="banner__left">
                        <img src={bannerImg} alt="banner-img" />
                    </div>
                    <div className="banner__right">
                        <p className="banner__subtitle">SALE UP TO 35% OFF</p>
                        <h2 className="title">HUNDREDS of New lower prices!</h2>
                        <p className="banner__desc">
                            It’s more affordable than ever to give every room in
                            your home a stylish makeover
                        </p>
                        <Link>Shop now</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
