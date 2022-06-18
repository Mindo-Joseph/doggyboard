/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Box, GridList, GridListTile } from '@material-ui/core';

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
    <Box p={1} style={{ backgroundColor: '#dedede' }}>
      <GridList cellHeight={160} cols={4}>
        {images.map((src, index) => (
          <GridListTile key={index}>
            <img src={src} alt={`dog-${index}`} />
          </GridListTile>
        ))}
      </GridList>
    </Box>
  );
}

export default ImagesLoaded;
