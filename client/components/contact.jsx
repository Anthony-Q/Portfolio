import React from 'react';
import Github from "./github.jsx";
import LinkedIn from "./linkedin.jsx";
import Gmail from "./gmail.jsx";
import Twitter from "./twitter.jsx";

const Contact = () => {
    return (
        <div className="contactContainer">
        <LinkedIn />
        <Gmail />
        <Github />
        <Twitter />
        </div>
    )
}

export default Contact;

