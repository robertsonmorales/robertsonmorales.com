import React from "react";

function Subheadline({ section, label }) {

    return (
        <div className="text-center mb-4">
            <div className="text-section">{ section }</div>
            <h2 className="text-highlight" dangerouslySetInnerHTML={{ __html: label }} />
        </div>
    );  
}

export default Subheadline;