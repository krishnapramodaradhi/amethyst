import Link from 'next/link';
import { FaSun, FaCalendar } from 'react-icons/fa';

import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <>
      <header>
        <nav className={classes.navbar}>
          <div className={classes.logo}>
            <Link href='/'>Amethyst</Link>
          </div>
          <ul className={classes.nav}>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/events'>Explore Events</Link>
            </li>
            <li>
              <Link href='/' className={classes.create}>
                <FaCalendar />
                <span>Create Event</span>
              </Link>
            </li>
            <li>
              <button>
                <FaSun />
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main className={classes.main}>{props.children}</main>
    </>
  );
};

export default Layout;
