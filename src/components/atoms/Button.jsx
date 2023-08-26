import React from "react";

function Button({ id, selector, text }) {
    return (
        <button type="button" id={ id } className={ selector }>{ text }</button>
    )
}

export default Button;