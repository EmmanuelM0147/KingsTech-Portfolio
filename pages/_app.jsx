import { Analytics } from '@vercel/analytics/react';
import { LazyMotion, domAnimation } from "framer-motion"
import Head from 'next/head';
import Script from 'next/script';
import SetGridGap from '../components/utils/set.grid.util'
import Layout from '../components/layout/layout'
import "../node_modules/the-new-css-reset/css/reset.css"
import "@fontsource/fira-code/400.css"
import "@fontsource/fira-code/600.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter/800.css"
import '../node_modules/devicon/devicon.min.css'
import '../styles/css/variables.css'
import '../styles/css/global.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>My App</title>
            </Head>
            <LazyMotion features={domAnimation}>
                <Layout>
                    <Component {...pageProps} />
                    <SetGridGap />
                    <Analytics />
                </Layout>
            </LazyMotion>
            <Script
                id="buy-me-a-coffee-script"
                src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
                data-name="BMC-Widget"
                data-cfasync="false"
                data-id="emmanuelokeowo"
                data-description="Support me on Buy me a coffee!"
                data-message=""
                data-color="#87CEEB"
                data-position="Right"
                data-x_margin="18"
                data-y_margin="18"
                strategy="lazyOnload" // Load script lazily
                onLoad={() => {
                    const bmcWidget = document.querySelector("[data-name='BMC-Widget']");
                    if (bmcWidget) {
                        bmcWidget.style.position = 'fixed';
                        bmcWidget.style.bottom = '20px';
                        bmcWidget.style.right = '20px';
                    }
                }}
            />
        </>
    )
}
