import styles from './Footer.module.css';

function Footer() {

  return (
    <footer className={styles.footer}>
      <span id={styles['left-span']}>Footer item</span>
      <span>Footer item</span>
    </footer>
  );
}

export default Footer;
