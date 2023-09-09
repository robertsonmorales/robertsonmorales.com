import React, { useRef, useEffect } from "react";
import { onScrollReveal } from "../../helper/scroll-reveal";

function Subheadline({ section, label }) {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);

    useEffect(() => {
        onScrollReveal(sectionRef.current, {
            delay: 500,
            distance: '15%',
            origin: 'top',
            easing: 'ease'
        });

        onScrollReveal(headingRef.current, {
            delay: 300,
            distance: '10%',
            origin: 'bottom',
            easing: 'ease'
        });
    });

    return (
        <div className="text-center mb-4">
            <div className="text-section">
                <div className="borders"></div>
                <span ref={ sectionRef } className="white-space-nowrap">{ section }</span>
                <div className="borders"></div>
            </div>
            <h2 ref={ headingRef } className="text-highlight" dangerouslySetInnerHTML={{ __html: label }} />
        </div>
    );  
}

export default Subheadline;