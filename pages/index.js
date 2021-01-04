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
          </h1>

          <p className={utilStyles.description}>
            <div className={styles.wave}>👋</div>
          </p>
      </main>

    </Layout>
  )
}
