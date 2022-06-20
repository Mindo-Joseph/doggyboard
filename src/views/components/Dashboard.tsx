import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import Table from './Table';
import SearchHeader from './SearchHeader';
import API from '../../infrastructure/services/api/dogs/index';
import { useQuery } from '../../application/hooks/useQuery';
import { DogsResponse, Status } from '../../interfaces';
import styles from './css/Dashboard.module.css';

function Dashboard() {
  // state
  const [allDogs, setAllDogs] = useState<string[]>([]);
  const [filteredDogs, setFilteredDogs] = useState<string[]>([]);
  const [imagesStatus, setImagesStatus] = useState<Status>('ready');
  const [activeDog, setActiveDog] = useState<string>('');

  const {

    status: buttonsStatus,
    data,
    setStatus: setButtonsStatus,
  } = useQuery<DogsResponse>({
    apiCall: API.getDogs,
    initialStatus: 'loading',
  });

  useEffect(() => {
    if (data?.message) {
      const dogsArray = Object.keys(data.message);
      setAllDogs(dogsArray);
      setFilteredDogs(dogsArray);
    }
  }, [data]);

  return (
    <Container className={styles.container}>
      <SearchHeader
        allDogs={allDogs}
        setButtonsStatus={setButtonsStatus}
        setImagesStatus={setImagesStatus}
        setFilteredDogs={setFilteredDogs}
        setActiveDog={setActiveDog}
      />
      <Table
        dogs={filteredDogs.slice(0, 12)}
        activeDog={activeDog}
        buttonsStatus={buttonsStatus}
        imagesStatus={imagesStatus}
        setActiveDog={setActiveDog}
        setImagesStatus={setImagesStatus}
      />
    </Container>
  );
}

export default Dashboard;
