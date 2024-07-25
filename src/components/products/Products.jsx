import React, { useState } from "react";
import "./products.scss";
import { FaStar } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../context/slices/cartSlice";
import { useDeleteProductMutation } from "../../context/api/productApi";
import Model from "../model/Model";
import { toggleHeart } from "../../context/slices/wishlistSlice";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";

const Products = ({ data, setEditProduct }) => {
    let { pathname } = useLocation();
    const dispatch = useDispatch();
    let [deleteProduct] = useDeleteProductMutation();
    const [delId, setDelId] = useState(null);
    const wishlistData = useSelector((state) => state.wishlist.value);

    return (
        <>
            <div className="products__card">
                <div className="products__card__img">
                    <Link to={`products/${data.id}`}>
                        <img src={data.images[0]} alt="img" />
                    </Link>
                    {pathname !== "/admin/manageProduct" ? (
                        <>
                            <button
                                className="products__card__add"
                                onClick={() => dispatch(addToCart(data))}
                            >
                                Add to Cart
                            </button>
                            <button
                                onClick={() => dispatch(toggleHeart(data))}
                                className="products__card__like"
                            >
                                {wishlistData?.some(
                                    (el) => el.id === data.id
                                ) ? (
                                    <FaHeart color="crimson" />
                                ) : (
                                    <FaRegHeart />
                                )}
                            </button>
                        </>
                    ) : (
                        <></>
                    )}
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
                    {pathname === "/admin/manageProduct" ? (
                        <div className="products__card__manage-btns">
                            <button onClick={() => setEditProduct(data)}>
                                Edit
                            </button>
                            <button onClick={() => setDelId(data.id)}>
                                Delete
                            </button>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
            {delId ? (
                <Model close={setDelId} width={300}>
                    <h2 style={{ textAlign: "center" }}>Are you sure</h2>
                    <div style={{ display: "flex" }}>
                        <button onClick={() => deleteProduct(delId)}>
                            Yes
                        </button>
                        <button onClick={() => setDelId(null)}>No</button>
                    </div>
                </Model>
            ) : (
                <></>
            )}
        </>
    );
};

export default Products;
