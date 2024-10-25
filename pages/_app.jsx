import { Analytics } from '@vercel/analytics/react';
import { LazyMotion, domAnimation } from "framer-motion"
import Head from 'next/head';
import Script from 'next/script'; // Import next/script for loading scripts
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
                onLoad={() => {
                    const bmcScript = document.createElement('script');
                    bmcScript.src = 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js';
                    bmcScript.setAttribute('data-name', 'BMC-Widget');
                    bmcScript.setAttribute('data-id', 'emmanuelokeowo');
                    bmcScript.setAttribute('data-description', 'Support me on Buy me a coffee!');
                    bmcScript.setAttribute('data-message', '');
                    bmcScript.setAttribute('data-color', '#87CEEB');
                    bmcScript.setAttribute('data-position', 'Right');
                    bmcScript.setAttribute('data-x_margin', '18');
                    bmcScript.setAttribute('data-y_margin', '18');
                    document.body.appendChild(bmcScript);
                }}
                strategy="lazyOnload" // Load script lazily
            />
            <LazyMotion features={domAnimation}>
                <Layout>
                    <Component {...pageProps} />
                    <SetGridGap />
                    <Analytics />
                </Layout>
            </LazyMotion>
        </>
    )
}
