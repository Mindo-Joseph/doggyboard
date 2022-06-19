import React from 'react';
import styles from './css/main.module.css';

function Heading() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h3>Dog Dashboard</h3>
        </div>
        <div className={styles.burgerMenu}>
          <i className="fa-regular fa-bars icon" />
        </div>
      </div>
    </header>
  );
}
export default Heading;
