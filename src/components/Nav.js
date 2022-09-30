import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
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
            <li key={links.to} className={style.styleList}>
              <NavLink to={links.to}>
                {' '}
                {links.text}
              </NavLink>
            </li>
          ))}

        </ul>
      </div>
      <div className={style.user}>
        <BsPersonCircle />
      </div>

    </nav>
  </header>

);

export default Nav;
