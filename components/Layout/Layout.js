import Navbar from './Navbar';
import Footer from './Footer';
import styles from './Layout.module.css';
import Container from 'react-bootstrap/container'

function Layout(props) {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{props.children}</main>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
