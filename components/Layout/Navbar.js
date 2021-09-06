import Link from 'next/link'

import styles from './Navbar.module.css';

function Navbar() {

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>Rey Nazareno</Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href='/portfolio'>Porftolio</Link>
          </li>
          <li>
            <Link href='/blog'>Blog</Link>
          </li>
          <li>
            <Link href='/about'>About Me</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
