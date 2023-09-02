import MaintenanceMode from "../images/svg/503.svg";

function Page504(){
    return (
        <div className="container">
            <div className="row flexbox-center flex-column vh-100">
                <div className="col flexbox-center">
                    <img src={ MaintenanceMode }
                        alt="Not Found"
                        width="400" />
                </div>
                <div className="col text-center">
                    <div className="display-1 text-primary font-weight-600">503</div>
                    <h3>Ooops!</h3>
                    <p className="text-muted">The project is currently under maintenance mode. <br/>We'll be back shortly. Sorry ;(</p>

                    <a href="/" className="btn btn-outline-primary">Go Back</a>
                </div>
            </div>
        </div>
    );
}

export default Page504;