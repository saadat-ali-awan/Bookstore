import { NavLink } from 'react-router-dom';
import styles from './NavMenu.module.css';

function NavMenu() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => `${styles['nav-link']} ${(isActive ? styles.selected : '')}`}
          >
            Books
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories"
            className={({ isActive }) => `${styles['nav-link']} ${(isActive ? styles.selected : '')}`}
          >
            Categories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
