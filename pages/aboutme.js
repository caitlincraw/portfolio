import Head from 'next/head'
import styles from '../styles/Aboutme.module.css'
import utilStyles from '../styles/utils.module.css'
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faGit, faCss3Alt, faReact } from '@fortawesome/free-brands-svg-icons'


export default function AboutMe() {
    return (
      <Layout>
        <Head>
          <title>Caitlin Crawford | About Me</title>
        </Head>
  
      <main className={utilStyles.main}>
        <h1 className={utilStyles.title}>
          About Caitlin
        </h1>
  
        <p className={utilStyles.description}>
        <img className={styles.pic} src="/images/banff.jpg"></img>
        <img className={styles.pic} src="/images/caitlinandgrant.jpg"></img>
        <img className={styles.pic} src="/images/caitlinonmisty.jpg"></img>
        <img className={styles.pic} src="/images/catsnme.jpg"></img>
        </p>

        <p className={styles.aboutMe}>
            I'm an aspiring software developer, a life-long city dweller/advocate, a math enthusiast, a crazy cat lady, and an avid outdoors[wo]man. 
            I'm new to the software development world, but I'm ready to tackle problems, both big and small, with software solutions in order to make the world a better place for all.
            I'm currently located in Chattanooga, Tennessee, alongside my goofy husband, Grant, and our three purrfect feline children, Toots, Milo, and Driz.
        </p>

        <h1 className={utilStyles.title}>
          Technologies
        </h1>

        {/* <p className={utilStyles.description}>
        </p> */}
        <div className={styles.technologies}>
            <span className={styles.icon}><FontAwesomeIcon icon={faHtml5} /></span>
            <span className={styles.icon}><FontAwesomeIcon icon={faGit} /></span>
            <span className={styles.icon}><FontAwesomeIcon icon={faCss3Alt} /></span>
            <span className={styles.icon}><FontAwesomeIcon icon={faReact} /></span>
        </div>
        

        <h1 className={utilStyles.title}>
          Education
        </h1>

        <div className={styles.education}>
		<ul className={styles.list}>
			<li className={styles.card}>
				<h2 className={styles.title}>Full-Stack Software Development Certificate</h2>
				<h3 className={styles.organization}>
					<a href="https://www.digitalcrafts.com/" target="_blank">DigitalCrafts</a>
				</h3>
				<h3 className={styles.location}>Atlanta, GA</h3>
				<h3 className={styles.date}>July 2020 - Jan 2021</h3>
			</li>
			<li className={styles.card}>
				<h2 className={styles.title}>M.S. Environmental Planning and Design</h2>
				<h3 className={styles.organization}>
					<a href="https://ced.uga.edu/programs/mupd/" target="_blank">Unversity of Georgia</a>
				</h3>
				<h3 className={styles.location}>Athens, GA</h3>
				<h3 className={styles.date}>June 2016 - August 2018</h3>
            </li>
            <li className={styles.card}>
				<h2 className={styles.title}>B.S. Mathematics</h2>
				<h3 className={styles.organization}>
					<a href="https://www.berry.edu/academics/majors/mathematics/" target="_blank">Berry College</a>
				</h3>
				<h3 className={styles.location}>Rome, GA</h3>
				<h3 className={styles.date}>Aug 2013 - May 2015</h3>
			</li>
        </ul>
        </div> 

        <h1 className={utilStyles.title}>
          Work Experience
        </h1>

        <div className={styles.work}>
		<ul className={styles.list}>
			<li className={styles.card}>
				<h2 className={styles.title}>Planning Analyst</h2>
				<h3 className={styles.organization}>
					<a href="https://www.chcrpa.org/" target="_blank">Chattanooga-Hamilton County Regional Planning Agency</a>
				</h3>
				<h3 className={styles.location}>Chattanooga, TN</h3>
				<h3 className={styles.date}>Aug 2019 - Present</h3>
			</li>
			<li className={styles.card}>
				<h2 className={styles.title}>Urban Planner</h2>
				<h3 className={styles.organization}>
					<a href="http://www.johngallup.com/" target="_blank">John Gallup and Associates</a>
				</h3>
				<h3 className={styles.location}>Marietta, GA</h3>
				<h3 className={styles.date}>Sept 2018 - June 2019</h3>
            </li>
        </ul>
        </div> 

      </main>

      </Layout>
    )
  }