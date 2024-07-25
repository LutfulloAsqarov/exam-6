import React from "react";
import { useSelector } from "react-redux";
import Products from "../../components/products/Products";
import "./wishlist.scss";

const Wishlist = () => {
    let wishlistData = useSelector((state) => state.wishlist.value);
    return (
        <div className="container">
            <div className="wishlist">
                <div className="wishlist__cards">
                    {wishlistData?.map((el) => (
                        <Products data={el} key={el.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Wishlist;
