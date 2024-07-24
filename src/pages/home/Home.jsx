import React from "react";
import Hero from "./hero/Hero";
import Room from "./room/Room";
import Service from "./service/Service";
import Banner from "./banner/Banner";
import Article from "./article/Article";
import Newsletter from "./newsletter/Newsletter";
import Arrival from "./arrival/Arrival";

const Home = () => {
    return (
        <div>
            <Hero />
            <Room />
            <Arrival />
            <Service />
            <Banner />
            <Article />
            <Newsletter />
        </div>
    );
};

export default Home;
