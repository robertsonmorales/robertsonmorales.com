import React from "react";

function Button({ id, selector, text, action }) {
    return (
        <button type="button" id={ id } className={ selector } onClick={ action }>{ text }</button>
    )
}

export default Button;