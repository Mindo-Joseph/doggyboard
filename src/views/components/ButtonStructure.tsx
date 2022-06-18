/* eslint-disable react/no-array-index-key */
import React from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

/**
 * Skeleton buttons
 *
 * Placeholder for loading buttons
 * @returns
 */
function ButtonStructure() {
  return (
    <GridList cellHeight={40} cols={4}>
      {Array(12)
        .fill(null)
        .map((_, index) => (
          <GridListTile key={index}>
            <Skeleton
              animation="wave"
              variant="text"
              width="100%"
              height={70}
            />
          </GridListTile>
        ))}
    </GridList>
  );
}

export default ButtonStructure;
