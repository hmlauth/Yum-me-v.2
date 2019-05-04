import React from "react";
import "./List.css";

export const ListItem = props => {
    return (
        <li className="list-group-item" >
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={props.img} className="card-img" alt={props.title}>
                        </img>
                    </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">
                                    {props.title}  
                                </h5>
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
        </li>
    )
}