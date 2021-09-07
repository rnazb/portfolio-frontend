import Navbar from './Navbar'
import styles from './Layout.module.css'
import ParticleCloudCanvas from '../ParticleCloudCanvas'

function Layout(props) {
  return (
    <>
      <Navbar />
      <ParticleCloudCanvas />
      <main className={styles.main}>{props.children}</main>
    </>
  );
}

export default Layout;
