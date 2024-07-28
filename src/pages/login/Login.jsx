import React, { useEffect, useState } from "react";
import "./login.scss";
import loginImg from "../../assets/login.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setToken } from "../../context/slices/authSlice";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

const Login = () => {
    const [username, setUsername] = useState("john32");
    const [password, setPassword] = useState("87654321");
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handelSubmit = (e) => {
        e.preventDefault();
        if (username === "john32" && password === "87654321") {
            dispatch(setToken("token"));
            navigate("/admin/createProduct");
        } else {
            toast.error("Username or Password wrong");
        }
    };
    return (
        <div className="login">
            <div className="login__left">
                <img src={loginImg} alt="" />
            </div>
            <div className="login__right">
                <form onSubmit={handelSubmit} action="" className="login__form">
                    <p className="login__form__title">Sign In</p>
                    <p className="login__form__desc">
                        Don’t have an accout yet? Sign Up
                    </p>
                    <div className="login__form__input">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="login__form__input">
                        <input
                            type={`${showPass ? "text" : "password"}`}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            onClick={() => setShowPass((p) => !p)}
                            type="button"
                        >
                            {showPass ? <FiEyeOff /> : <FiEye />}
                        </button>
                    </div>
                    <div className="login__form__ask">
                        <p>Remember me</p>
                        <p>Forgot Password?</p>
                    </div>
                    <button className="login__form__btn">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
