import React from 'react';

import MyContactDetails from "../data/contact";

class Footer extends React.Component {
    constructor(props){
        super(props);

        this.state = { contacts: MyContactDetails };
    }

    renderContacts() {
        let contacts = this.state.contacts.map((contact, index) => {
            if(contact.type === 1){
                return (
                    <li className="list-group-item" key={ index }>
                        <span className="text-muted">{ contact.label }</span>
                        <a
                            href={ contact.redirect }
                            id={ contact.id }
                            title={ contact.title }
                            className="text-decoration-none"
                        >
                            <h5 className="text-dark">{ contact.value }</h5>
                        </a>
                    </li>
                );
            }else{
                return (
                    <li className="list-group-item text-muted" key={ index }>
                        <span className="text-muted">{ contact.label }</span>
                        <h5 className="text-dark">{ contact.value }</h5>
                    </li>
                );
            }
        });

        return contacts;
    }

    render() {
        return (
            <footer>
                <div className="text-center py-1 pb-5 bg-light">
                    <div className="container">
                    <ul className="list-group">
                        { this.renderContacts() }
                    </ul>
                    </div>
                </div>
            </footer>
        );
    };
}

export default Footer;