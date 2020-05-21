import React, { useState } from 'react';
import { Link } from "gatsby";
import he from 'he';

export default function Nav(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar2" role="navigation">
            <span className="navbar-toggle" id="js-navbar-toggle">
                <i className="fas fa-bars" role="menu" tabIndex={0} onKeyDown={() => setIsOpen(!isOpen)} onClick={() => setIsOpen(!isOpen)}></i>
            </span>
            <Link to="/home" className="logo"><img src={"/img/logo-250x90.png"} alt="Write for Recovery logo" title="Write for Recovery logo" /></Link>
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