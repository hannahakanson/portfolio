import React from 'react'
import { VscGithub } from 'react-icons/vsc'

import styles from './Footer.module.scss'

const Footer = () => {
    return (
      <div className={styles.Root}>
        <a href="https://github.com/hannahakanson">
          <VscGithub size={40} />
        </a>
      </div>
    );
}

export default Footer
