import { useState } from "react";
import FeatherIcon from "feather-icons-react";

function Modal({ ...behavior }) {
    const [closeModal, setCloseModal] = useState(behavior.isShow);

    const setMessage = () => {
        if(behavior.isSent){
            return (
                <>
                    <h3>Message Sent Successfully!</h3>
                    <p className="text-muted mb-4">Thank you for reaching out. We'll get back to you soon!</p>
                </>
            )
        }else{
            return (
                <>
                    <h3>Oops! Message Failed to Send</h3>
                    <p className="text-muted mb-4" dangerouslySetInnerHTML={{__html: "Please hold on, we're working to fix the issue. Feel free to try sending your <br> message again shortly. Thank you for your patience!"}} />
                </>
            )
        }
    }

    return (
        <div className={ `custom-modal vh-100 ${ closeModal ? '' : 'd-none' }` }>
            <div className="flexbox-center vh-100">
                <div className="card p-4 d-flex align-items-center gap-x-base">
                    <div className="circle-success">
                        <FeatherIcon icon="check" />
                    </div>
        
                    <div className="text-center">
                        { setMessage() }
                        <button type="button" onClick={ () => setCloseModal(false) } className="btn btn-outline-primary">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;