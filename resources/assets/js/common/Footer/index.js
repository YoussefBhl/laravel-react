import React from "react";
import CopyRight from "./components/CopyRight";
import AppDate from "./components/AppDate";

const Footer = (props) => {
    return (
        <footer>
            <div className="container">
                <hr />
                <div className="row">
                    <CopyRight />
                    <AppDate />
                </div>
            </div>
        </footer>
    );
};

export default Footer;