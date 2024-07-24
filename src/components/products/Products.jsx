import React from "react";

const Products = ({ data }) => {
    return (
        <div className="products__card">
            <div>
                <img src={data.images[0]} alt="img" />
            </div>
            <div className="products__card__info">
                <h3>{data.title}</h3>
            </div>
        </div>
    );
};

export default Products;
