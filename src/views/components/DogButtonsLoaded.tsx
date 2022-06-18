/* eslint-disable react/no-array-index-key */
import React, { MouseEvent } from 'react';
import { ImageList, ImageListItem } from '@material-ui/core';
import { Dispatcher } from '../../interfaces';
import DogButtonLoaded from './ButtonLoaded';

interface Props {
  dogs: string[];
  activeDog: string;
  setActiveDog: Dispatcher<string>;
  // eslint-disable-next-line no-unused-vars
  handleClick: (event: MouseEvent<HTMLElement>) => void;
}

/**
 * Loaded Dog Buttons
 *
 * All dog buttons, loaded and ready for clicks
 * @param props
 * @returns
 */
function DogButtonsLoaded({
  dogs,
  activeDog,
  setActiveDog,
  handleClick,
}: Props) {
  return (
    <ImageList cellHeight={40} cols={4}>
      {dogs.map((dog, index) => (
        <ImageListItem key={index}>
          <DogButtonLoaded
            dog={dog}
            activeDog={activeDog}
            setActiveDog={setActiveDog}
            handleClick={handleClick}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default DogButtonsLoaded;
