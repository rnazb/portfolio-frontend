import Link from 'next/link'

import styles from './Navbar.module.css';

function Navbar() {

  return (
    <header className={styles.header}>
      {/* <div className={styles.logo}>React Meetups</div> */}
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href='/'>Porftolio</Link>
          </li>
          <li>
            <Link href='/'>Blog</Link>
          </li>
          <li>
            <Link href='/'>About Me</Link>
          </li>
          <li>
            <Link href='/'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
