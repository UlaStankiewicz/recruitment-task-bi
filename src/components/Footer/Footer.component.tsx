import React from "react";

import "./Footer.scss";
import FooterProps from "./FooterProps";

const Footer: React.FC<FooterProps> = props => {
    const { customClassName } = props;

    return (
        <footer className={`footer ${customClassName}`}>
            Created with all power by Monika Opawska
        </footer>
    );
}

export default Footer;