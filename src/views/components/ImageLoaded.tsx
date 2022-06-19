/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Box, ImageList, ImageListItem } from '@material-ui/core';
import styles from './css/Imagestyles.module.css';

interface Props {
  images: string[];
}

/**
 * We're using the `images` prop to map over each
 * image and return a `GridListTile` component with an
 * `img` tag inside
 * @param {Props}  - Props
 * @returns A Box component with a GridList component inside of it.
 */
function ImagesLoaded({ images }: Props) {
  return (
    <Box p={1}>
      <ImageList rowHeight={260} cols={4} className={styles.imageContainer} gap={30}>
        {images.map((src, index) => (
          <ImageListItem key={index} className={styles.imageItem}>
            <img src={src} alt={`dog-${index}`} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default ImagesLoaded;
