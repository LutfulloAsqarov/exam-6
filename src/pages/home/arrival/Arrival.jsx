import React from "react";
import { useGetProductsQuery } from "../../../context/api/productApi";
import Products from "../../../components/products/Products";
import "./arrival.scss";

const Arrival = () => {
    let { data } = useGetProductsQuery();
    return (
        <section id="products">
            <div className="container">
                <div className="products">
                    <div className="products__cards">
                        {data?.slice(0, 10).map((el) => (
                            <Products data={el} key={el.id} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Arrival;
