import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from "gatsby";
import he from 'he';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const data = useStaticQuery(graphql`
    query NavQuery {
      wordpressSiteMetadata {
        url
      }
      wordpressMenusMenusItems(name: {eq: "main"}) {
        name
        items {
          slug
          title
          url
          classes
        }
      }
    }
  `)

  const siteUrl = data.wordpressSiteMetadata.url;
  const navItems = data.wordpressMenusMenusItems.items;
  const navItemsWithoutDomain = navItems.map(item => {
      const path = item.url.replace(siteUrl, '');
      item.url = path;
      return item;
  });
  console.log('navItemsWithoutDomain', navItemsWithoutDomain);

  return (
        <nav className="navbar2" role="navigation">
            <span className="navbar-toggle" id="js-navbar-toggle">
                <i className="fas fa-bars" role="menu" tabIndex={0} onKeyDown={() => setIsOpen(!isOpen)} onClick={() => setIsOpen(!isOpen)}></i>
            </span>
            <Link to="/home" className="logo"><img src={"/img/logo-250x90.png"} alt="Write for Recovery logo" title="Write for Recovery logo" /></Link>
            <ul className={(isOpen ? "active" : "") + " main-nav"}>
                {navItemsWithoutDomain.map((node, index) => {
                    return (
                        <li key={index}><Link className={node.classes + "nav-links"} to={node.url}>{he.decode(node.title)}</Link></li>
                    )
                })}
            </ul>
        </nav>
    );
}