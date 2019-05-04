import React from "react";
import "./style.css";

function NavBar() {
    return <div>
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">Yum(me).v.2</a>
            <a className="navbar-brand" href="/">Search</a>
            <a className="navbar-brand" href="/saved">Saved</a>
        </nav>
    </div>
}

export default NavBar;