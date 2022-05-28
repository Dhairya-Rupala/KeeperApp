import React from "react";

const toDay = new Date();
const year = toDay.getFullYear();


function Footer() {
    return <footer>
        <p>
        copyright © {year}
        </p>
    </footer>
}

export default Footer;