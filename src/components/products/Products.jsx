import React from "react";
import "./products.scss";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Products = ({ data }) => {
    return (
        <div className="products__card">
            <div className="products__card__img">
                <Link to={`products/${data.id}`}>
                    <img src={data.images[0]} alt="img" />
                </Link>
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
