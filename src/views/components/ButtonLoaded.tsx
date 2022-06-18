import React, { MouseEvent } from 'react';

import { Button } from '@material-ui/core';
import { Dispatcher } from '../../interfaces';

interface Props {
  dog: string;
  activeDog: string;
  setActiveDog: Dispatcher<string>;
  // eslint-disable-next-line no-unused-vars
  handleClick: (event: MouseEvent<HTMLElement>) => void;
}

/**
 * Loaded Dog Button
 *
 * Single dog button
 * @param props
 * @returns
 */
function DogButtonLoaded({
  dog,
  activeDog,
  setActiveDog,
  handleClick,
}: Props) {
  const handleActiveDog = (event: MouseEvent<HTMLElement>) => {
    // aria-label might be undefined..
    const newActiveDog = event.currentTarget.getAttribute('aria-label')!;

    handleClick(event);
    setActiveDog(newActiveDog);
  };

  return (
    <Button
      fullWidth
      variant="contained"
      aria-label={dog}
      onClick={handleActiveDog}
      style={
        dog === activeDog
          ? {
            background: 'linear-gradient(to right, #fb7ba2, #fce043)',
            color: 'white',
            textTransform: 'lowercase',
            borderRadius: '5px',

          }
          : { textTransform: 'lowercase' }
      }
    >
      {dog}
    </Button>
  );
}

export default DogButtonLoaded;
