import FeatherIcon from "feather-icons-react";
import Tag from "../atoms/Tag";

function Project ({ details }){
    let builWith = null;
    if(details.tags.length > 0){
        builWith = details.tags.map(tag => <Tag name={tag.name} />);
    }

    const reversedLayout = (details.isReversed 
        ? "row no-gutters flexbox-works flex-md-row-reverse"
        : "row no-gutters flexbox-works flex-md-row");

    return (
        <div className={reversedLayout}>
            <div className="col-md-5">
                <div className="d-none d-md-block placeholder placeholder-1"></div>
                <h3 className="work-title">{ details.title }</h3>

                <div className="built-with">{ builWith }</div>
                
                <br />

                <p className="work-description">{ details.description }</p>
        
                <div className="work-action">
                    <a href={details.link} 
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
                        <a href={details.link}
                            target="_blank" 
                            rel="noopener noreferrer">
                            <img src={details.image} 
                                className="img-fluid rounded img-fluid-hovered"
                                alt={details.title}
                                width="500"
                                height="380" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;