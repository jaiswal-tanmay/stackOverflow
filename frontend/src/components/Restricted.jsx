import React from "react";
import { useNavigate } from "react-router-dom";

import "../css/Restricted.css";


const home_btn = {
    color: 'blue',
    textDecoration: 'underline',
    cursor: 'pointer'
}

export default function Restricted() {
    const navigate = useNavigate();

    return (
        <div className="restricted-page-container">
            Restricted access.
            <h5
                style={home_btn}
                onClick={() => navigate("/")}
            >
                Home
            </h5>
        </div>
    );
}