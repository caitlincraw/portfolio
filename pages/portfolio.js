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
                Projects
            </h1>

            <div className={styles.portfolio}>

                <div className={styles.details}>
                    <h2 className={styles.title}><a href="http://isbeernear.com" target="_blank">Beer Is Near</a></h2>
                    <a href="http://isbeernear.com" target="_blank"><img className={styles.screenshot} src="./images/beerisnear1.png"></img></a>
                    <p className={styles.bio}>Beer is Near is a site where users can search for non alcoholic craft beers and add them to their favorite, need to try, or nasty lists. The site is based on a quote from my dad and was built as a tool for him to find new and tasty beers. </p>
                    <a className={styles.sourceCode} href="https://github.com/caitlincraw/is-beer-near" target="_blank">See the source code here!</a>
                    <p className={styles.technologies}>Built with JavaScript, React, Redux, Node.js, Express.js, Sequelize.js, PostgreSQL, and CSS.</p>
                </div>

                <div className={styles.details}>
                    <h2 className={styles.title}><a href="http://pandemic-patios.com" target="_blank">Pandemic Patios</a></h2>
                    <a href="http://pandemic-patios.com" target="_blank"><img className={styles.screenshot} src="./images/pandemicpatios1.png"></img></a>
                    <p className={styles.bio}>Pandemic Patios is a COVID-era app that allows users to search for and review safe outdoor dining spaces in their area. Once logged in, users can add patios and review existing patios. While not logged in, users can still see reviews of patios by city. </p>
                    <a className={styles.sourceCode} href="https://github.com/RudyCruisin/PandemicPatios" target="_blank">See the source code here!</a>
                    <p className={styles.technologies}>Built with JavaScript, Node.js, Passport.js, Express.js, Sequelize, PostgreSQL, HTML, CSS, Google Maps JavaScript API, Google Places API, and the Covid Tracking Project Data API.  </p>
                </div>


                <div className={styles.details}>
                    <h2 className={styles.title}><a href="https://petpalsinc.surge.sh/" target="_blank">PetPals</a></h2>
                    <a href="https://petpalsinc.surge.sh/" target="_blank"><img className={styles.screenshot} src="./images/petpals1.png"></img></a>
                    <p className={styles.bio}>PetPals is an app that provides a "Tinder-like" platform for pet adoptions. Users can swipe left or right on available pets and then link to the pet’s PetFinder adoption listing. </p>
                    <a className={styles.sourceCode} href="https://github.com/AliKasper/PetPals" target="_blank">See the source code here!</a>
                    <p className={styles.technologies}>Built with JavaScript, HTML, CSS, Bootstrap, jQuery, jQueryUI, and PetFinder API. </p>
                </div>
            </div>
        </main>

    </Layout>
  )
}