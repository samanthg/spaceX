import React, { Component } from 'react';
const Button = (props) => {
    return (
        <div className="p-1">
            <button type="button"
                onClick={props.function}
                className="btn btn-success">{props.title}
            </button>
        </div>
    )
};
export default Button;