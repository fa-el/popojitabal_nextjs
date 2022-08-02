import Head from 'next/head'
import '../styles/globals.css'
import App from 'next/app'
import { useEffect, useRef } from 'react'
import Router, { useRouter } from 'next/router'
import { ThemeProvider } from 'next-themes'
function MyApp({ Component, pageProps }) {

    return (
        <ThemeProvider attribute='class'>
            <Head>
                <title>My Nextjs UI App</title>
                <meta name="Description" content="APP" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Component {...pageProps} />
            {/* <FullPageLoader ref={loaderRef}/> */}
        </ThemeProvider>
    )
}

export default MyApp