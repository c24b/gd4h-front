import Head from 'next/head'
// import Image from 'next/image'
// import styles from './layout.module.css'
// import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import HeaderWrapper from '../header/HeaderWrapper';

const Layout = ({ children, home }) => {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" rel="preload"
                    href="/fonts/Marianne-Bold.woff"
                    as="font"
                    crossOrigin="" />

                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
            </Head>
            <HeaderWrapper />
            <main>{children}</main>
        </div>
    )
}

export default Layout;