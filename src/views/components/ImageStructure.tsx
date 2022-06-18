/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Box, ImageList, ImageListItem } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import styles from './css/ButtonStructure.module.css';

/**
 * Skeleton Images
 *
 * Placeholder for loading images
 * @returns
 */
function ImageStructure() {
  return (
    <Box m={10} p={10}>
      <ImageList cellHeight={160} cols={4} className={styles.gridList}>
        {Array(8)
          .fill(null)
          .map((_, index) => (
            <ImageListItem key={index} className={styles.gridListItem}>
              <Skeleton
                animation="wave"
                variant="rect"
                height={160}
              />
            </ImageListItem>
          ))}
      </ImageList>
    </Box>
  );
}

export default ImageStructure;
