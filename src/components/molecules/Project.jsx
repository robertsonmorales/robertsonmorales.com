import React from 'react';

import FeatherIcon from "feather-icons-react";
import Tag from "../atoms/Tag";

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = { details: props.details };
    }

    renderBuiltWith() {
        let builWith = null;
        if(this.state.details.tags.length > 0){
            builWith = this.state.details.tags.map(tag => <Tag name={tag.name} key={ tag.id } /> );
        }

        return builWith;
    }

    renderLayout() {
        const reversedLayout = (this.state.details.isReversed 
            ? "row no-gutters flexbox-works flex-md-row-reverse"
            : "row no-gutters flexbox-works flex-md-row");

        return reversedLayout;
    }

    render() {
        return (
            <div className={ this.renderLayout() }>
                <div className="col-md-5">
                    <div className="d-none d-md-block placeholder placeholder-1"></div>
                    <h3 className="work-title">{  this.state.details.title }</h3>
    
                    <div className="built-with">{ this.renderBuiltWith() }</div>
                    
                    <br />
    
                    <p className="work-description">{  this.state.details.description }</p>
            
                    <div className="work-action">
                        <a href={ this.state.details.link } 
                            target="_blank"
                            title="View More" 
                            rel="noopener noreferrer" 
                            className="btn btn-primary mobile-w-100">
                            <div className="d-flex align-items-center">
                                <span className="mr-2">View More</span>
                                <FeatherIcon icon="external-link" className="font-size-sm" />
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-6">
                    <div className="work-img-wrapper">
                        <div>
                            <a href={ this.state.details.link }
                                target="_blank" 
                                rel="noopener noreferrer">
                                <img src={ this.state.details.image } 
                                    className="img-fluid rounded img-fluid-hovered"
                                    alt={ this.state.details.title }
                                    width="500"
                                    height="380" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project;