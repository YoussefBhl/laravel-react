import React from "react";

export default function Search(props) {
    return (
        <form className="navbar-form navbar-left" action="/action_page.php">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search" name="search" />
                <div className="input-group-btn">
                    <button className="btn btn-default" type="submit">
                        <i className="glyphicon glyphicon-search"></i>
                    </button>
                </div>
            </div>
        </form>
    );
};
