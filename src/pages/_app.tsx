import '../app/globals.css'
import '../lib/fontawesome'
import type { AppProps } from 'next/app'
import Layout from '../Layout/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
