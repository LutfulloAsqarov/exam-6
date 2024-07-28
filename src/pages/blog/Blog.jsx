import React, { memo, useEffect, useState } from "react";
import { useGetProductsQuery } from "../../context/api/productApi";
import { Pagination, Stack } from "@mui/material";
// import ProductsLoading from "../../components/products-loading";

import "./blog.scss";
import Products from "../../components/products/Products";

const Blog = () => {
    const [page, setPage] = useState(1);
    const limit = 9;
    const { data: lengthData } = useGetProductsQuery();
    const { data, isLoading, isFetching } = useGetProductsQuery({
        limit,
        page,
        // category: categoryValue,
    });
    const pageCount = Math.ceil((lengthData?.length || 0) / limit);

    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <section className="blog">
            <div className="container">
                <div className="blog__container">
                    <div className="blog__top">
                        <h1>Our Blog</h1>
                        <p>Home ideas and design inspiration</p>
                    </div>
                    <div className="blog__cards">
                        {isLoading || isFetching ? (
                            // <ProductsLoading limit={limit} />
                            <></>
                        ) : (
                            data?.map((product) => (
                                <Products key={product.id} data={product} />
                            ))
                        )}
                    </div>
                    <div className="blog__pagination">
                        <Stack spacing={2}>
                            <Pagination
                                count={pageCount}
                                page={page}
                                onChange={handleChange}
                            />
                        </Stack>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(Blog);
