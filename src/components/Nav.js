import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './nav.module.css';

const Links = [
  { to: '/', text: 'BOOKS' },
  { to: 'Categories', text: 'CATEGORIES' },
];

const Nav = () => (
  <header className="container-fluid p-3">
    <nav className={style.navigation}>
      <div className={style.left}>
        <span> BookStore CMS</span>
        <ul className={style.ulBox}>
          {Links.map((links) => (
            <li key={links.to}>
              <NavLink to={links.to}>
                {' '}
                {links.text}
              </NavLink>
            </li>
          ))}

        </ul>
      </div>
      <span> Hello</span>
    </nav>
  </header>

);

export default Nav;
