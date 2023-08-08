import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="text-center py-1 pb-5 bg-light">
                    <div className="container">
                    <ul className="list-group">
                        <li className="list-group-item">
                        <span className="text-muted">Or Email Me</span>
                        <a
                            href="mailto:robertsonmorales23@gmail.com?cc=trebormoralesson@gmail.com"
                            id="btn-email"
                            title="Send message via mail"
                            className="text-decoration-none"
                        >
                            <h5 className="text-dark">robertsonmorales23@gmail.com</h5>
                        </a>
                        </li>

                        <li className="list-group-item">
                        <span className="text-muted">Or Call Me</span>
                        <a
                            href="https://api.whatsapp.com/send?phone=639552808438"
                            id="btn-call"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Open and send a message to Whatsapp"
                            className="text-decoration-none"
                        >
                            <h5 className="text-dark">+63 9552808438</h5>
                        </a>
                        </li>

                        <li className="list-group-item text-muted">
                        <span className="text-muted">Or Let's Hang out!</span>
                        <h5 className="text-dark">San Jose Del Monte, Bulacan, Philippines</h5>
                        </li>
                    </ul>
                    </div>
                </div>
            </footer>
        );
    };
}

export default Footer;