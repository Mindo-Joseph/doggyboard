import React from 'react';
import {
  Box,
} from '@material-ui/core';
import styles from './css/main.module.css';

export default function Landingpage() {
  return (
    <Box sx={{ flexGrow: 1 }} display="flex" justifyContent="space-between" p={1} m={1}>
      <section className={styles.landing}>
        <div className={styles.landingText}>
          <h1>Your dashboard for viewing various dog breeds</h1>
          <p>
            Welcome to Dog Dashboard. Here we will be able to view various dog breeds
          </p>
        </div>
        <div className={styles.landingImage}>
          <img src="https://c4.wallpaperflare.com/wallpaper/468/441/85/pack-of-dogs-on-a-white-background-different-dog-breeds-wallpaper-preview.jpg" alt="Dogs" />
        </div>
      </section>
    </Box>
  );
}
