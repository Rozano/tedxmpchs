import React from 'react';
import './subscribe.css';

const Subscribe = ({closeModal}) => {
    return (
        <div className="subscribe-modal-background">
            <div className="subscribe-modal-container scale-up-center">
                <div className="subscribe-modal-close">
                    <button onClick={() => closeModal(false)}>X</button>
                </div>
                <div className="subscribe-modal-title">
                    <p>Join the Newsletter!</p>
                </div>
                <div className="subscribe-modal-body">
                    <p>To stay up to date with news relating to TEDxMCPHS.</p>
                </div>
                <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfETJ7Y8nipwLq4eYtPoVtDIRBzM9WaIwR5l3sD9s6BaDeuWA/formResponse" method="post" className="subscribe-modal-footer" target="_blank">
                    <input type="email" placeholder="Your Email Address" name="emailAddress" required/>
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
    );
};
export default Subscribe;