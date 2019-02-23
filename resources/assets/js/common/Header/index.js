import React from "react";
import Brand from "./components/Brand";
import Links from "./components/Links";
import Search from "./components/Search";

export default class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-inverse" >
                <div className="container-fluid">
                    <Brand />
                    <Links />
                    <Search />
                </div>
            </nav>
        );
    }
};
