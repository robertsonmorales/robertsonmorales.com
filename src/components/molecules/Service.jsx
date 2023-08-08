import React from 'react';

import FeatherIcon from 'feather-icons-react';

function Service({ details }) {
    return (
        <div className="card card-service mb-md-4" 
            id={details.id} 
            key={details.id}>
            <div className="pt-4 pb-2 pt-lg-3 card-header">
                <FeatherIcon icon={details.icon} />
            </div>
            <div className="card-body">
                <h4 className="mb-4 card-title">{details.title}</h4>
                <p className="card-text">{details.description}</p>
            </div>
            <div className="pb-4 pt-2 card-footer">
                <a href={details.route} 
                    className="font-weight-500">Learn More →</a>
            </div>
            <div className="card-hover"></div>
        </div>
    )
}

export default Service;