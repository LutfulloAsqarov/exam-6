import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../context/api/productApi";
import "./singleProduct.scss";
import { FaStar } from "react-icons/fa";

const SingleProduct = () => {
    const [inx, setInx] = useState(0);
    let { id } = useParams();

    const { data } = useGetProductByIdQuery(id);

    return (
        <div id="single">
            <div className="container">
                <div className="single">
                    <div className="single__top">
                        <div className="single__top__left">
                            <div className="single__top__main-img">
                                <img src={data?.images[inx]} alt="img" />
                            </div>
                            <div className="single__top__images">
                                {data?.images.map((el, i) => (
                                    <span key={el} onClick={() => setInx(i)}>
                                        <img src={el} alt="" />
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="single__top__right">
                            <div className="single__top__info">
                                <div className="single__top__stars">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <p>11 Reviews</p>
                                </div>
                                <h1>{data?.title}</h1>
                                <p>{data?.description}</p>
                                <div className="single__top__price">
                                    ${data?.price}
                                    <span>${data?.oldPrice}</span>
                                </div>
                            </div>
                            <div className="single__top__time">
                                <p>Offer expires in: </p>
                                <ul>
                                    <li>
                                        <span>02</span>Days
                                    </li>
                                    <li>
                                        <span>12</span>Hours
                                    </li>
                                    <li>
                                        <span>45</span>Minutes
                                    </li>
                                    <li>
                                        <span>15</span>Seconds
                                    </li>
                                </ul>
                            </div>
                            <div className="single__top__btns">
                                <div className="single__top__counter">
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </div>
                                <button className="single__top__wishlist">
                                    Wishlist
                                </button>
                            </div>
                            <button className="single__top__cart">
                                Add to Cart
                            </button>
                            <div className="single__top__category">
                                <p>
                                    <span> SKU: </span>
                                    <span>1117</span>
                                </p>
                                <p>
                                    <span>Category:</span>
                                    <span>Living Room, Bedroom</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="single__bot">
                        <div className="single__bot__up-tab">
                            <button>Product Information</button>
                            <button>Reviews</button>
                            <button>Another tab</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
