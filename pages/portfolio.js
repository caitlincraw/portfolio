import Head from 'next/head'
import styles from '../styles/Portfolio.module.css'
import utilStyles from '../styles/utils.module.css'
import Layout from '../components/layout'

export default function Portfolio() {
  return (
    <Layout>
      <Head>
        <title>Caitlin Crawford | Portfolio</title>
      </Head>

    <main className={utilStyles.main}>
      <h1 className={utilStyles.title}>
        Portfolio
      </h1>

      <p className={utilStyles.description}>
      </p>
      <div className={styles.project}>
		<ul className={styles.list}>
			<li className={styles.card}>
				<h2 className={styles.title}><a href="http://pandemic-patios.com" target="_blank">Pandemic Patios</a></h2>
				<h3 className={styles.organization}>
                    <a href="https://github.com/RudyCruisin/PandemicPatios" target="_blank">See the source code here!</a>
				</h3>
				<h3 className={styles.date}>Nov 2020</h3>
                <p className={styles.bio}>A COVID-era app that allows users to search for and review safe outdoor dining spaces in their area. Once logged in, users can add patios and review existing patios. While not logged in, users can still see reviews of patios by city. </p>
                <h3 className={styles.technologies}>Built with TBD</h3>
			</li>
            <li className={styles.card}>
				<h2 className={styles.title}><a href="https://petpalsinc.surge.sh/" target="_blank">PetPals</a></h2>
				<h3 className={styles.organization}>
                    <a href="https://github.com/AliKasper/PetPals" target="_blank">See the source code here!</a>
				</h3>
				<h3 className={styles.date}>Sept 2020</h3>
                <p className={styles.bio}>PetPals is an app that provides a "Tinder-like" platform for pet adoptions. Users can swipe left or right on available pets and then link to the pet’s PetFinder adoption listing. </p>
                <h3 className={styles.technologies}>Built with TBD</h3>
			</li>
        </ul>
        </div>
    </main>

    </Layout>
  )
}