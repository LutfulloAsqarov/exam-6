import React from "react";
import "./products.scss";
import { FaStar } from "react-icons/fa";

const Products = ({ data }) => {
    return (
        <div className="products__card">
            <div className="products__card__img">
                <img src={data.images[0]} alt="img" />
            </div>
            <div className="products__card__info">
                <div className="products__card__star">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <h3>{data.title}</h3>
                <p>{data.price}$</p>
            </div>
        </div>
    );
};

export default Products;
