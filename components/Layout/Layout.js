import Navbar from './Navbar';
import Footer from './Footer';
import styles from './Layout.module.css';
import Container from 'react-bootstrap/container'
import ParticleCloudCanvas from '../ParticleCloudCanvas';

function Layout(props) {
  return (
    <>
      <Navbar />
      <ParticleCloudCanvas />
      <main className={styles.main}>{props.children}</main>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
