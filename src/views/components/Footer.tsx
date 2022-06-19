import React from 'react';
import styles from './css/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        <li className={styles.item}><a className={styles.link} href="https://twitter.com/mindoJoseph">Twitter</a></li>
        <li className={styles.item}><a className={styles.link} href="https://www.linkedin.com/in/josephmindo/">LinkedIn</a></li>
        <li className={styles.item}>
          <p className={styles.icon}>👋</p>
        </li>
      </ul>

    </footer>
  );
}
export default Footer;
