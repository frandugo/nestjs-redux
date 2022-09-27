import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { store } from 'store'
import '../styles/globals.scss'

import { Aside } from '@/components/Aside'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Aside/>
    </Provider>  
  )
}

export default MyApp
