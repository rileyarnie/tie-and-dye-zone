import { useState } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../app/store'
import { Provider } from 'react-redux'
import Header from '../components/Header'
import SideNav from '../components/SideNav'

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store} >
    <Header />
    <SideNav />
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
