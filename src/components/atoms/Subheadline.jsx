import React from "react";

function Subheadline({ section, label }) {

    return (
        <div className="text-center mb-4">
            <div className="text-section">
                <div className="borders"></div>
                <span className="white-space-nowrap">{ section }</span>
                <div className="borders"></div>
            </div>
            <h1 className="text-highlight" dangerouslySetInnerHTML={{ __html: label }} />
        </div>
    );  
}

export default Subheadline;