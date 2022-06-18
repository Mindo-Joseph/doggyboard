import React, { MouseEvent, useState } from 'react';
import DogImages from './DogImages';
import DogButtons from './DogButtons';
import API from '../../infrastructure/services/api/dogs/index';
import { Dispatcher, Status } from '../../interfaces';

interface Props {
  dogs: string[];
  buttonsStatus: Status;
  imagesStatus: string;
  activeDog: string;
  setActiveDog: Dispatcher<string>;
  setImagesStatus: Dispatcher<Status>;
}

/**
 * Dog Table
 *
 * Buttons and Images
 * @param props
 * @returns
 */
function Table({
  dogs,
  activeDog,
  buttonsStatus,
  imagesStatus,
  setActiveDog,
  setImagesStatus,
}: Props) {
  // state
  const [images, setImages] = useState<string[]>([]);

  // on click
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    // show skeleton images
    setImagesStatus('loading');

    // get dog
    const breed = event.currentTarget.getAttribute('aria-label')!;

    // 8 random images by breed
    API.getImages(breed).then((results) => {
      // array of image src
      const imagesResult = results.data.message;

      // set images
      setImages(imagesResult);
    });
  };

  return (
    <>
      <DogButtons
        dogs={dogs}
        activeDog={activeDog}
        buttonsStatus={buttonsStatus}
        handleClick={handleClick}
        setActiveDog={setActiveDog}

      />
      <DogImages
        images={images}
        imagesStatus={imagesStatus}
        setImagesStatus={setImagesStatus}
      />
    </>
  );
}

export default Table;
