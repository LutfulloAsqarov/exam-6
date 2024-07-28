import React from "react";
import { SERVICE } from "../../../static";
import "./service.scss";

const Service = () => {
    let serviceItems = SERVICE.map((el) => (
        <div className="service__card" key={el.id}>
            <img src={el.img} alt="img" />
            <div>
                <h3>{el.title}</h3>
                <p>{el.desc}</p>
            </div>
        </div>
    ));
    return (
        <section id="service">
            <div className="container">
                <div className="service">
                    <div className="service__cards">{serviceItems}</div>
                </div>
            </div>
        </section>
    );
};

export default Service;
