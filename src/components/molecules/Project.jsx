import React, { useRef, useEffect } from 'react';

import FeatherIcon from "feather-icons-react";
import Tag from "../atoms/Tag";
import { onScrollReveal } from '../../helper/scroll-reveal';

function Project({ details }) {
    const header = useRef(null);
    const description = useRef(null);
    const CAT = useRef(null);
    const image = useRef(null);

    useEffect(() => {
        onScrollReveal(header.current, {
            delay: 100,
            distance: '5%',
            origin: 'left',
            easing: 'ease-out',
        });
        
        onScrollReveal('.badge', {
            delay: 200,
            distance: '5%',
            origin: 'right',
            easing: 'ease',
            interval: 100,
        });
        
        onScrollReveal(description.current, {
            delay: 300,
            distance: '5%',
            origin: 'right',
            easing: 'ease',
        });
        
        onScrollReveal(CAT.current, {
            delay: 400,
            distance: '10%',
            origin: 'bottom',
            easing: 'ease',
        });
        
        onScrollReveal(image.current, {
            delay: 200,
            distance: '5%',
            origin: 'bottom',
            easing: 'ease',
        });
        
    })

    // const [builWith, setBuilWith] = useState(null);

    // * Renders the tags in the project
    const renderBuildWith = () => {
        let builWith = null;
        if (details.tags.length > 0) {
            builWith = details.tags.map(tag => <Tag name={tag.name} key={tag.id} />);
        }

        return builWith;
    }


    // * Renders the layout of the project
    const renderLayout = () => {
        const reversedLayout = (details.is_reversed 
            ? "row no-gutters flexbox-works flex-md-row-reverse"
            : "row no-gutters flexbox-works flex-md-row");

        return reversedLayout;
    }

    // * Renders the button if visible or not
    const renderButton = () => {
        if(details.show_button) {
            return (
                <div className="work-action">
                    <a href={ details.link } 
                        target="_blank"
                        title={ details.button_text }
                        rel="noopener noreferrer" 
                        className="btn btn-primary mobile-w-100"
                        ref={ CAT }>
                        <div className="flexbox-center">
                            <FeatherIcon icon="external-link" />
                            <span className="ml-2 mr-2">{ details.button_text }</span>
                        </div>
                    </a>
                </div>
            )
        }
    }

    return (
        <div className={ renderLayout() }>
            <div className="col-md-5">
                <div className="d-flex flex-column gap-x-sm">
                    <h3 className="work-title mb-0 w-75" ref={ header }>{  details.title }</h3>
    
                    <ul className="built-with">{ renderBuildWith() }</ul>
    
                    <p className="work-description" ref={ description }>{ details.description }</p>
            
                    { renderButton() }
                </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6">
                <div className="work-img-wrapper" ref={ image }>
                    <a href={ (details.show_button) ? details.link : '' }
                        target="_blank" 
                        rel="noopener noreferrer">
                        <img src={ details.image } 
                            className="img-fluid rounded img-fluid-hovered"
                            alt={ details.title }
                            width="500"
                            height="380" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project;