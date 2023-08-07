import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div class="text-center py-1 pb-5 bg-light">
                    <div class="container">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <span class="text-muted">Or Email Me</span>
                                <a href="mailto:robertsonmorales23@gmail.com?cc=trebormoralesson@gmail.com" 
                                    id="btn-email" 
                                    title="Send message via mail" 
                                    class="text-decoration-none">
                                    <h5 class="text-dark">robertsonmorales23@gmail.com</h5>
                                </a>
                            </li>

                            <li class="list-group-item">
                                <span class="text-muted">Or Call Me</span>
                                <a href="https://api.whatsapp.com/send?phone=639552808438" 
                                    id="btn-call" 
                                    target="_blank" 
                                    rel='noopener noreferrer'
                                    title="Open and send a message to Whatsapp"
                                    class="text-decoration-none">
                                    <h5 class="text-dark">+63 9552808438</h5>
                                </a>
                            </li>

                            <li class="list-group-item text-muted">
                                <span class="text-muted">Or Let' Hang out!</span>
                                <h5 class="text-dark">San Jose Del Monte, Bulacan, Philippines</h5>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;