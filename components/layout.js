import styles from './layout.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faCat } from '@fortawesome/free-solid-svg-icons'

export const siteTitle = 'Caitlin Crawford'

export default function Layout({children}) {
  return (
    <div className={styles.container}>
        <nav className={styles.navBar}>
            <div>
            <Link href="/"><a className={styles.initials}>CC</a></Link>
            </div>
            <div className={styles.items}>
                <Link href="./aboutme"><a>About Me</a></Link>
                <Link href="./portfolio"><a>Projects</a></Link>
            </div>
        </nav>

      <div>{children}</div>

      <footer className={styles.footer}>
            <div className={styles.copyright}>
                Powered by{'  '} 
                <FontAwesomeIcon icon={faCoffee} />
                and{'  '}
                <FontAwesomeIcon icon={faCat} />
            </div>
            <div className={styles.items}>
                <a
                href="mailto:caitlin.crawford16@gmail.com"
                target="_blank"
                >
                    <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a
                href="https://www.linkedin.com/in/caitlin-crawford-aicp-6716778a/"
                target="_blank"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                href="https://github.com/caitlincraw"
                target="_blank"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
      </footer>
      
    </div>
  )
}