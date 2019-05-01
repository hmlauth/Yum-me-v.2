import React from "react";
import "./List.css";
import { SaveBtn, DeleteBtn } from "../../Components/Button"

export const ListItem = props => {
    console.log(props);
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
                                <h5 className="card-title" href={props.link}>
                                    {props.title}  
                                </h5>
                                <SaveBtn />
                            </div>
                        </div>
                    </div>
                </div>
        </li>
    )
}