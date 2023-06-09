import React from "react";
import '../styles/ButtonClear.css'

const ButtonClear = (props) => (
    <div className="button-clear" onClick={props.handlerClear}>
        {props.children}
    </div>
);

export default ButtonClear;