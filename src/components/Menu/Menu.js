import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

export default function Menu() {
  return (
    <>
      <nav>
        <NavLink
          exact
          to="/"
          className={styles.link}
          activeClassName={styles.active}
        >
          Home
        </NavLink>

        <NavLink
          to="/movies"
          className={styles.link}
          activeClassName={styles.active}
        >
          Movies
        </NavLink>
      </nav>
    </>
  );
}
