/* eslint-disable react/no-array-index-key */
import React from 'react';
import { ImageList, ImageListItem } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import styles from './css/ButtonStructure.module.css';

/**
 * Skeleton buttons
 *
 * Placeholder for loading buttons
 * @returns
 */

function ButtonStructure() {
  return (
    <ImageList cellHeight={40} cols={4}>
      {Array(12)
        .fill(null)
        .map((_, index) => (
          <ImageListItem key={index} className={styles.gridListItem}>
            <Skeleton
              animation="wave"
              variant="text"
              width="100%"
              height={70}
            />
          </ImageListItem>
        ))}
    </ImageList>
  );
}

export default ButtonStructure;
