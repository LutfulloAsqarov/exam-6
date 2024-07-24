import React from "react";
import heroImg from "../../../assets/hero-bg.png";

import "./hero.scss";
const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="hero">
                    <div className="hero__imgs">
                        <img src={heroImg} alt="hero-img" />
                    </div>
                    <div className="hero__desc">
                        <h1>
                            Simply Unique
                            <span style={{ color: "#6C7275" }}>/ </span>
                            Simply Better.
                        </h1>
                        <p>
                            3legant is a gift & decorations store based in HCMC,
                            Vietnam. Est since 2019
                            <span style={{ color: "#6C7275" }}>.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
