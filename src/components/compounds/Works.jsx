import React from "react";

import Subheadline from "../atoms/Subheadline";
import Project from "../molecules/Project";
import MyWorks from "../../data/works";
import { Link } from "react-router-dom";

function Works() {
    const renderWorks = MyWorks.map((work, index) => {
        return (
            <Project details={ work } key={ index } />
        );
    });

    return (
        <section id="works" className="py-5">
            <div className="container">
                <Subheadline 
                    section="Work"
                    label="Recent Projects" />

                { renderWorks }
    
                {/* <div className="text-center mt-5">
                    <Link to="/projects" 
                        id="view-more-projects"
                        className="btn btn-outline-primary"
                    >More Projects &#8594;</Link>
                </div> */}
    
            </div>
        </section>
    )
}

export default Works