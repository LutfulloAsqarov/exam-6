import React from "react";
import { useSelector } from "react-redux";
import Products from "../../components/products/Products";
import "./wishlist.scss";
import { Link } from "react-router-dom";

const Wishlist = () => {
    let wishlistData = useSelector((state) => state.wishlist.value);
    return (
        <>
            {wishlistData.length ? (
                <div className="container">
                    <div className="wishlist">
                        <div className="wishlist__cards">
                            {wishlistData?.map((el) => (
                                <Products data={el} key={el.id} />
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div
                    style={{
                        height: "400px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        gap: "30px",
                    }}
                >
                    <h1>No liked product yet !</h1>
                    <Link
                        to={"/"}
                        style={{
                            padding: "10px",
                            background: "#33a0ff",
                            color: "#fff",
                        }}
                    >
                        Go home
                    </Link>
                </div>
            )}
        </>
    );
};

export default Wishlist;
