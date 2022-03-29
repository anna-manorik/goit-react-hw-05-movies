import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

export default function Menu() {
  return (
    <>
      <nav>
        <NavLink
          exact
          to={process.env.PUBLIC_URL + '/'}
          className={({ isActive }) => isActive ? styles.active : styles.link}
        >
          Home
        </NavLink>

        <NavLink
          to={process.env.PUBLIC_URL + '/movies'}
          className={({ isActive }) => isActive ? styles.active : styles.link}
        >
          Movies
        </NavLink>
      </nav>
    </>
  );
}
