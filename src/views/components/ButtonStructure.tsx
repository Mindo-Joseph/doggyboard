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
    <ImageList rowHeight={140} cols={4} className={styles.list}>
      {Array(12)
        .fill(null)
        .map((_, index) => (
          <ImageListItem key={index}>
            <Skeleton
              animation="wave"
              variant="text"
              width="100%"
              height={30}
            />
          </ImageListItem>
        ))}
    </ImageList>
  );
}

export default ButtonStructure;
