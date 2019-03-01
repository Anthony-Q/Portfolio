import React from 'react';
import Github from "./github.jsx";
import LinkedIn from "./linkedin.jsx";

const Contact = () => {
    return (
        <div className="contactContainer">
        <LinkedIn />
        <a className="link2" href="mailto:anthonyjquattrocchi@gmail.com">Email</a>
        <Github />
        <a className="link4" href="https://twitter.com/AJQuattrocchi" target="_blank">Twitter</a>
        </div>
    )
}

export default Contact;

