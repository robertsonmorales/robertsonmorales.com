import React, { useRef, useEffect } from "react";
import { onScrollReveal } from "../../helper/scroll-reveal";

function ButtonNavigation({ id, selector, text }) {
    
    const removeActiveClass = () => {
        let navs = document.querySelectorAll('.nav-link.navbar');

        navs.forEach(nav => {
            document.getElementById(nav.id).classList.remove('active');
        });
    }

    let triggerClick = () => {
        removeActiveClass(); // remove .active class

        let newId = id.split("-").reverse()[0]; // get section's id
        document.getElementById(id).classList.add('active'); // add className `active` on the triggered nav
        document.getElementById(newId).scrollIntoView(); // scroll to the section
    } 

    return (
        <button type="button" id={ id } className={ selector } 
            onClick={ triggerClick }>{ text }</button>
    )
}

export default ButtonNavigation;