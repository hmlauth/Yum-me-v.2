import React from "react";
import { PromiseProvider } from "mongoose";
// import "./style.css";

export const ScrapedCard = ({ children }) => {
    return <div>
        <div className="card">
        <div className="card-header">
            <h1>SCRAPED</h1>
            <button className="btn btn-primary" data-url="https://www.tasteofhome.com/collection/our-100-highest-rated-recipes-ever/">Taste of Home - 100 Highest Rated Recipes</button>
        </div>
        <div className="card-body">
            {children}
        </div>
        </div>
    </div>
}

