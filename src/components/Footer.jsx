import React from 'react';
import './Footer.css';

export const Footer = props => (
    <footer className="footerStyling">
        <p>{props.message} <a href={props.link} target="_blank">{props.author}</a></p>
    </footer>
);