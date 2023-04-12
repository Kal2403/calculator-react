import React from "react";
import '../styles/Button.css'

function Button(props){

    const isOperator = value => {
        return isNaN(value) && (value !== '.') && (value !== '=');
    };

    return (
        <div className={`button-container ${isOperator(props.children) ? 'operator' : null}`.trim()} 
        onClick={() => props.handlerClick(props.children)} >
            {props.children}
        </div>
    )
}

export default Button;