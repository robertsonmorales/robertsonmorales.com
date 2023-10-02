import React from "react";
import NotFoundImage from "../images/svg/404.svg";

function Page404(){
    return (
        <div className="container">
            <div className="row flexbox-center flex-column vh-100">
                <div className="col flexbox-center">
                    <img src={ NotFoundImage }
                        alt="Not Found"
                        width="400" />
                </div>
                <div className="col text-center">
                    <div className="display-1 text-primary font-weight-600">404</div>
                    <h3>Ooops!</h3>
                    <p className="text-muted">The page you are looking for could not be found.</p>

                    <a href="/" className="btn btn-outline-primary">Go Back</a>
                </div>
            </div>
        </div>
    );
}

export default Page404;