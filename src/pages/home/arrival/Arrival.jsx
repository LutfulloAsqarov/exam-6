import React from "react";
import { useGetProductsQuery } from "../../../context/api/productApi";
import Products from "../../../components/products/Products";

const Arrival = () => {
    let { data } = useGetProductsQuery();
    return (
        <section id="arrival">
            <div className="container">
                <div className="arrival">
                    <div className="arrival__cards">
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
