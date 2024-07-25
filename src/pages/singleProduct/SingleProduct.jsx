import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../context/api/productApi";
import "./singleProduct.scss";
import { FaStar } from "react-icons/fa";
import singleImg from "../../assets/single.svg";
import Newsletter from "../home/newsletter/Newsletter";

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
                        <div className="single__bot__review">
                            <p>11 Reviews</p>
                            <select name="" id="">
                                <option value="">Newest</option>
                                <option value="">Oldest</option>
                            </select>
                        </div>
                        <div className="single__bot__reviewers">
                            <div className="single__bot__reviewer">
                                <img src={singleImg} alt="" />
                                <div className="single__bot__reviewer__info">
                                    <h3>Sofia Harvetz</h3>
                                    <div>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <p>
                                        I bought it 3 weeks ago and now come
                                        back just to say “Awesome Product”. I
                                        really enjoy it. At vero eos et
                                        accusamus et iusto odio dignissimos
                                        ducimus qui blanditiis praesentium
                                        voluptatum deleniti atque corrupt et
                                        quas molestias excepturi sint non
                                        provident.
                                    </p>
                                    <div className="single__bot__reviewer__btns">
                                        <button>Like</button>
                                        <button>Replay</button>
                                    </div>
                                </div>
                            </div>
                            <div className="single__bot__reviewer">
                                <img src={singleImg} alt="" />
                                <div className="single__bot__reviewer__info">
                                    <h3>Sofia Harvetz</h3>
                                    <div>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <p>
                                        I bought it 3 weeks ago and now come
                                        back just to say “Awesome Product”. I
                                        really enjoy it. At vero eos et
                                        accusamus et iusto odio dignissimos
                                        ducimus qui blanditiis praesentium
                                        voluptatum deleniti atque corrupt et
                                        quas molestias excepturi sint non
                                        provident.
                                    </p>
                                    <div className="single__bot__reviewer__btns">
                                        <button>Like</button>
                                        <button>Replay</button>
                                    </div>
                                </div>
                            </div>
                            <div className="single__bot__reviewer">
                                <img src={singleImg} alt="" />
                                <div className="single__bot__reviewer__info">
                                    <h3>Sofia Harvetz</h3>
                                    <div>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <p>
                                        I bought it 3 weeks ago and now come
                                        back just to say “Awesome Product”. I
                                        really enjoy it. At vero eos et
                                        accusamus et iusto odio dignissimos
                                        ducimus qui blanditiis praesentium
                                        voluptatum deleniti atque corrupt et
                                        quas molestias excepturi sint non
                                        provident.
                                    </p>
                                    <div className="single__bot__reviewer__btns">
                                        <button>Like</button>
                                        <button>Replay</button>
                                    </div>
                                </div>
                            </div>
                            <div className="single__bot__reviewer">
                                <img src={singleImg} alt="" />
                                <div className="single__bot__reviewer__info">
                                    <h3>Sofia Harvetz</h3>
                                    <div>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <p>
                                        I bought it 3 weeks ago and now come
                                        back just to say “Awesome Product”. I
                                        really enjoy it. At vero eos et
                                        accusamus et iusto odio dignissimos
                                        ducimus qui blanditiis praesentium
                                        voluptatum deleniti atque corrupt et
                                        quas molestias excepturi sint non
                                        provident.
                                    </p>
                                    <div className="single__bot__reviewer__btns">
                                        <button>Like</button>
                                        <button>Replay</button>
                                    </div>
                                </div>
                            </div>
                            <div className="single__bot__reviewer">
                                <img src={singleImg} alt="" />
                                <div className="single__bot__reviewer__info">
                                    <h3>Sofia Harvetz</h3>
                                    <div>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <p>
                                        I bought it 3 weeks ago and now come
                                        back just to say “Awesome Product”. I
                                        really enjoy it. At vero eos et
                                        accusamus et iusto odio dignissimos
                                        ducimus qui blanditiis praesentium
                                        voluptatum deleniti atque corrupt et
                                        quas molestias excepturi sint non
                                        provident.
                                    </p>
                                    <div className="single__bot__reviewer__btns">
                                        <button>Like</button>
                                        <button>Replay</button>
                                    </div>
                                </div>
                            </div>
                            <div className="single__bot__reviewer">
                                <img src={singleImg} alt="" />
                                <div className="single__bot__reviewer__info">
                                    <h3>Sofia Harvetz</h3>
                                    <div>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <p>
                                        I bought it 3 weeks ago and now come
                                        back just to say “Awesome Product”. I
                                        really enjoy it. At vero eos et
                                        accusamus et iusto odio dignissimos
                                        ducimus qui blanditiis praesentium
                                        voluptatum deleniti atque corrupt et
                                        quas molestias excepturi sint non
                                        provident.
                                    </p>
                                    <div className="single__bot__reviewer__btns">
                                        <button>Like</button>
                                        <button>Replay</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="single__bot__load">Load more</button>
                    </div>
                </div>
            </div>
            <Newsletter />
        </div>
    );
};

export default SingleProduct;
