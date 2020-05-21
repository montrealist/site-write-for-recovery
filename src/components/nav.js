import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Link } from "gatsby";
import he from 'he';

export default function Nav(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar2" role="navigation">
            <span className="navbar-toggle" id="js-navbar-toggle">
                <i className="fas fa-bars" onClick={() => setIsOpen(!isOpen)}></i>
            </span>
            <Link to="/home" className="logo"><img src={"/img/logo-250x90.png"} title="Write for Recovery logo" /></Link>
            <ul className={(isOpen ? "active" : "") + " main-nav"}>
                {props.items.map((node, index) => {
                    return (
                        <li key={index}><Link className="nav-links" to={"/" + node.slug}>{he.decode(node.title)}</Link></li>
                    )
                })}
            </ul>
        </nav>
    );
}