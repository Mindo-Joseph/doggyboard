import React from 'react';
import { Box, TextField, Typography } from '@material-ui/core';
import { Dispatcher, Status } from '../../interfaces';
import styles from './css/SearchHeader.module.css';

interface Props {
  allDogs: string[];
  setButtonsStatus: Dispatcher<Status>;
  setImagesStatus: Dispatcher<Status>;
  setFilteredDogs: Dispatcher<string[]>;
  setActiveDog: Dispatcher<string>;
}

function SearchHeader({
  allDogs,
  setButtonsStatus,
  setImagesStatus,
  setFilteredDogs,
  setActiveDog,
}: Props) {
  // when the user types in the search input field
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // clear the image component
    setImagesStatus('ready');

    // clear the active dog
    setActiveDog('');

    // capture user input
    const filter = event.target.value.toLowerCase();

    // an array of dogs that match the search
    const filteredList = allDogs.filter((dog) => dog.indexOf(filter) !== -1);

    // if match
    if (filteredList.length) {
      setButtonsStatus('loaded');
      // if no match
    } else {
      setButtonsStatus('none');
    }

    // set the array, even if empty
    setFilteredDogs(filteredList);
  };

  return (
    <Box p={1} m={1} className={styles.box}>
      <Box p={1}>
        <Typography variant="h4" className={styles.productHeading}>
          Search or Select a Breed
        </Typography>
      </Box>
      <Box p={1} m={1}>
        <TextField
          id="search-breeds"
          label="Search"
          onChange={handleSearchChange}
        />
      </Box>
    </Box>
  );
}
export default SearchHeader;
