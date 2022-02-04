import Head from 'next/head'
import Image from 'next/image'
import HeaderWrapper from '../components/header/header'
import Layout from '../layout/layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        Home
      </div>
    </Layout>
  )
}
