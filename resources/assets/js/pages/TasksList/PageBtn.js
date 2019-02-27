import React from 'react';

export default function PageBtn(props) {
    if (props.display)
        return (
            <div className={props.className}>
                <button
                    type="button"
                    className="btn"
                    onClick={() => props.handleClick(props.display)}>
                    {props.text}
                    </button>
            </div>
        );
    return null;
}