import Layout from '../components/Layout/Layout'
import Footer from '../components/Layout/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Footer />
    </Layout>
  )
}

export default App
