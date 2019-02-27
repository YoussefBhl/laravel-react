import React from 'react';
import PageBtn from './PageBtn';

export default function Pagination(props) {
    let nextClass = "col-md-2 ";
    if (!props.prev)
        nextClass += "col-md-offset-10";
    else
        nextClass += "col-md-offset-8";
    return (
        <div className="container">
            <div className="row">
                <PageBtn
                    display={props.prev}
                    className="col-md-2"
                    text="❮ Prev"
                    handleClick={props.handleClick} />
                <PageBtn
                    display={props.next}
                    className={nextClass}
                    text="Next ❯"
                    handleClick={props.handleClick} />
            </div>
        </div>
    );
}