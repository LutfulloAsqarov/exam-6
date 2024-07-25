import React from "react";
import "./newsletter.scss";
import { HiOutlineMail } from "react-icons/hi";

const Newsletter = () => {
    return (
        <section id="newsletter">
            <div>
                <div className="newsletter">
                    <h2 className="title">Join Our Newsletter</h2>
                    <p>Sign up for deals, new products and promotions</p>
                    <form action="" className="newsletter__form">
                        <div className="newsletter__form__input">
                            <HiOutlineMail />
                            <input type="text" placeholder="Email address" />
                        </div>
                        <button>SignUp</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
