import React from "react";
import { PromiseProvider } from "mongoose";
// import "./style.css";

export const SearchCard = ({ children }) => {
    return <div>
        <div className="card">
        <div className="card-header">
            <h1>Recipe Search</h1>
        </div>
        <div className="card-body">
            {children}
        </div>
        </div>
    </div>
}


