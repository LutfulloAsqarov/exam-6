import React from "react";
import room1 from "../../../assets/room/room1.svg";
import room2 from "../../../assets/room/room2.svg";
import room3 from "../../../assets/room/room3.svg";
import "./room.scss";
import { Link } from "react-router-dom";

const Room = () => {
    return (
        <section id="room">
            <div className="container">
                <div className="room">
                    <div className="room__cards">
                        <div
                            className="room__card"
                            style={{
                                background: `url(${room1})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                            }}
                        >
                            <h3>Living Room</h3>
                            <Link>Shop Now</Link>
                        </div>
                        <div
                            className="room__card"
                            style={{
                                background: `url(${room2})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                            }}
                        >
                            <h3>Bedroom</h3>
                            <Link>Shop Now</Link>
                        </div>
                        <div
                            className="room__card"
                            style={{
                                background: `url(${room3})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                            }}
                        >
                            <h3>Kitchen</h3>
                            <Link>Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Room;
