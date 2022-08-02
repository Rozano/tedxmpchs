import React from 'react';
import './contact.css';

const Contact = ({closeModal}) => {
    return (
        <div className="contact-modal-background">
            <div className="contact-modal-container scale-up-center">
                <div className="contact-modal-close">
                    <button onClick={() => closeModal(false)}>X</button>
                </div>
                <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSc25VZ8hs6-xxuQsCUx4FjBkjFogQfsz-mXH1QuWw7W0tQGrA/formResponse" method="post" className="contact-modal-information" onSubmit={() => closeModal(false)} target="_blank">
                    <div className="contact-modal-full-name">
                        <div className="contact-modal-first-name">
                            <input type="text" placeholder="First Name" name="entry.181048054" required/>
                        </div>
                        <div className="contact-modal-last-name">
                            <input type="text" placeholder="Last Name" name="entry.85220375" required/>
                        </div>
                    </div>
                    <div className="contact-modal-email">
                        <input type="email" placeholder="Email Address" name="emailAddress" required/>
                    </div>
                    <div className="contact-modal-body">
                        <textarea type="text" placeholder="Your Message" name="entry.1311635395" required/>
                    </div>
                    <div className="contact-modal-buttons">
                        <button className="contact-modal-buttons-cancel" onClick={() => closeModal(false)} type="button">Cancel</button>
                        <button className="contact-modal-buttons-send" type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Contact;