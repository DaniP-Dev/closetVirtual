import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <meta name="theme-color" content="#1E40AF" /> {/* Ajusta el color al color de tu Navbar */}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}