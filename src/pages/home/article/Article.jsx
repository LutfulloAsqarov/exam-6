import React from "react";
import { ARTICLE } from "../../../static";
import { Link } from "react-router-dom";
import "./article.scss";

const Article = () => {
    let articleItems = ARTICLE.map((el) => (
        <div key={el.id} className="article__card">
            <div className="article__card__img">
                <img src={el.img} alt="img" />
            </div>
            <div className="article__card__info">
                <h3>{el.title}</h3>
                <Link>Read more</Link>
            </div>
        </div>
    ));
    return (
        <section id="article">
            <div className="container">
                <div className="article">
                    <h2 className="title">Articles</h2>
                    <div className="article__cards">{articleItems}</div>
                </div>
            </div>
        </section>
    );
};

export default Article;
