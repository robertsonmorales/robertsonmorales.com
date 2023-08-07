import React from "react";

import Subheadline from "../atoms/Subheadline";
import Project from "../molecules/Project";
import MyWorks from "../../data/works";

function Works() {
    const renderWorks = MyWorks.map(work => {
        return (
            <Project details={work} />
        );
    })

    return (
        <section id="works" className="py-5">
            <div className="container">
                <Subheadline 
                    section="WORK"
                    label="Recent Projects" />

                { renderWorks }
    
                <div className="text-center mt-5">
                    <a href="/works/view-more" 
                        className="btn btn-outline-primary"
                        id="view-more-projects">View More Projects</a>
                </div>
    
            </div>
        </section>
    )
}

export default Works