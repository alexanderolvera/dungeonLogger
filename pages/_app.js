import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import initAuth from '../lib/initAuth';
import Layout from '../components/Layout'

initAuth()

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
