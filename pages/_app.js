import '../styles/globals.css'
import Layout from '../comp/layout'
function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp