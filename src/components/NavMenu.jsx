import { NavLink } from 'react-router-dom';
import styles from './NavMenu.module.css';

function NavMenu() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <NavLink
            to="/"
            className={({ isActive }) => `${styles['nav-link']} ${(isActive ? styles.selected : '')}`}
          >
            BOOKS
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink
            to="/categories"
            className={({ isActive }) => `${styles['nav-link']} ${(isActive ? styles.selected : '')}`}
          >
            CATEGORIES
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
