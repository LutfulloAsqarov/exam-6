import React, { useState } from "react";
import { useGetProductsQuery } from "../../../context/api/productApi";
import Products from "../../../components/products/Products";
import "./arrival.scss";
import { useGetCategoriesQuery } from "../../../context/api/categoryApi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Arrival = () => {
    const [categoryValue, setCategoryValue] = useState("all");
    let { data, isFetching, isLoading } = useGetProductsQuery({
        page: 1,
        limit: 10,
        category: categoryValue === "all" ? "" : categoryValue,
    });
    const { data: categoryData } = useGetCategoriesQuery();
    return (
        <section id="products">
            <div className="container">
                <div className="products">
                    <ul className="category__list">
                        <li className="category__item">
                            <data
                                onClick={(e) => {
                                    setCategoryValue(e.target.value);
                                    setPage(1);
                                }}
                                className={`category__data ${
                                    categoryValue === "all"
                                        ? "category__data-active"
                                        : ""
                                }`}
                                value="all"
                            >
                                All
                            </data>
                        </li>
                        {categoryData?.map((item) => (
                            <li key={item.id} className="category__item">
                                <data
                                    onClick={(e) => {
                                        setCategoryValue(e.target.value);
                                        setPage(1);
                                    }}
                                    className={`category__data ${
                                        categoryValue === item.title
                                            ? "category__data-active"
                                            : ""
                                    }`}
                                    value={item.title}
                                >
                                    {item.title}
                                </data>
                            </li>
                        ))}
                    </ul>
                    {isLoading || isFetching ? (
                        <div
                            style={{
                                height: "300px",
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "40px",
                            }}
                        >
                            <AiOutlineLoading3Quarters />
                        </div>
                    ) : (
                        <div className="products__cards">
                            {data?.map((el) => (
                                <Products data={el} key={el.id} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Arrival;
