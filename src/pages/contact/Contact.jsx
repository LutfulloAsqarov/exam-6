import React from "react";
import bannerImg from "../../assets/banner/banner-img.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { TbHome } from "react-icons/tb";
import { TbPhone } from "react-icons/tb";
import { TbMail } from "react-icons/tb";
import "./contact.scss";
import Service from "../home/service/Service";

const Contact = () => {
    return (
        <div id="contact">
            <div className="container">
                <h1>
                    We believe in sustainable decor. We’re passionate about life
                    at home.
                </h1>
                <p className="contact__desc">
                    Our features timeless furniture, with natural fabrics,
                    curved lines, plenty of mirrors and classic design, which
                    can be incorporated into any decor project. The pieces
                    enchant for their sobriety, to last for generations,
                    faithful to the shapes of each period, with a touch of the
                    present
                </p>
                <section id="banner">
                    <div className="banner">
                        <div className="banner__left">
                            <img src={bannerImg} alt="banner-img" />
                        </div>
                        <div className="banner__right">
                            <h2 className="title">About Us</h2>
                            <p className="banner__desc">
                                3legant is a gift & decorations store based in
                                HCMC, Vietnam. Est since 2019. Our customer
                                service is always prepared to support you <br />{" "}
                                24/7
                            </p>
                            <Link>
                                Shop now <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="contact">
                    <h2>Contact Us</h2>
                    <div className="contact__cards">
                        <div className="contact__card">
                            <TbHome />
                            <p>Address</p>
                            <h3>234 Hai Trieu, Ho Chi Minh City, Viet Nam</h3>
                        </div>
                        <div className="contact__card">
                            <TbPhone />
                            <p>Contact Us</p>
                            <h3>+84 234 567 890</h3>
                        </div>
                        <div className="contact__card">
                            <TbMail />
                            <p>Email</p>
                            <h3>hello@3legant.com</h3>
                        </div>
                    </div>
                    <div className="contact__form">
                        <form action="" className="contact__form__left">
                            <div className="contact__form__input">
                                <label htmlFor="fullName">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="contact__form__input">
                                <label htmlFor="fullName">Email Address</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="contact__form__input">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    rows={6}
                                    required
                                    type="text"
                                    placeholder="Message"
                                />
                            </div>
                            <button>Send Message</button>
                        </form>
                        <div className="contact__form__right">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11992.726986994308!2d69.20431214999999!3d41.2831488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1722011724520!5m2!1sen!2s"
                                // width="600"
                                height="400px"
                                style={{ border: "0" }}
                                allowFullScreen=""
                                loading="lazy"
                                // referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </section>
            </div>
            <div style={{ backgroundColor: "#F3F5F7", paddingTop: "0" }}>
                <Service />
            </div>
        </div>
    );
};

export default Contact;
