import type { AppProps } from 'next/app'
import React from 'react';

import '../styles/globals.css'
import 'swiper/css/bundle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}

export default React.memo(MyApp)
