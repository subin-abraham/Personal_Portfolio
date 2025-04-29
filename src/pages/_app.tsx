// pages/_app.tsx
import '../app/globals.css'
import '../lib/fontawesome'
import type { AppProps } from 'next/app'
import Layout from '../Layout/Layout'
import { LoaderProvider, useLoader } from '../context/LoaderContext'
import GlobalLoader from '@/context/GlobalLoader'

function AppContent({ Component, pageProps }: AppProps) {
  const { loading } = useLoader();
  
  return (
    <>
      {loading && <GlobalLoader />}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default function App(props: AppProps) {
  return (
    <LoaderProvider>
      <AppContent {...props} />
    </LoaderProvider>
  );
}
