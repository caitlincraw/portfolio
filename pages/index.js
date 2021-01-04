import Head from 'next/head'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Caitlin Crawford</title>
      </Head>

      <main className={utilStyles.main}>
          <h1 className={utilStyles.title}>
            Hello World, I'm Caitlin Crawford
            <span className={styles.wave}>👋</span>
          </h1>

          <p className={utilStyles.description}>
            <img className={styles.headshot} src="./images/headshot.jpg"></img>
          </p>
      </main>

    </Layout>
  )
}
