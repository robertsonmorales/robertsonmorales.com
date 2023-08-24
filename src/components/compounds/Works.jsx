import React from "react";

import Subheadline from "../atoms/Subheadline";
import Button from "../atoms/Button";
import Project from "../molecules/Project";
import MyWorks from "../../data/works";

function Works() {
    const renderWorks = MyWorks.map((work, index) => {
        return (
            <Project details={work} key={ index } />
        );
    })

    const viewMoreProjects = () => {
        alert('view more projects')
    }

    return (
        <section id="works" className="py-5">
            <div className="container">
                <Subheadline 
                    section="Work"
                    label="Recent Projects" />

                { renderWorks }
    
                <div className="text-center mt-5">
                    <Button 
                        id="view-more-projects"
                        selector="btn btn-outline-primary"
                        text="View More Projects"
                        action={ viewMoreProjects }
                    />
                </div>
    
            </div>
        </section>
    )
}

export default Works