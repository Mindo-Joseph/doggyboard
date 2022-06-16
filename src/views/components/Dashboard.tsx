import { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import Table from "./Table";
import Header from "./Header";
import API from "../../infrastructure/services/api/dogs/index";
import { useQuery } from "../../application/hooks/useQuery";
import { DogsResponse, Status } from "../../interfaces";


function Dashboard() {
  // state
  const [allDogs, setAllDogs] = useState<string[]>([]);
  const [filteredDogs, setFilteredDogs] = useState<string[]>([]);
  const [imagesStatus, setImagesStatus] = useState<Status>("ready");
  const [activeDog, setActiveDog] = useState<string>("");

  const {
    error,
    status: buttonsStatus,
    data,
    setStatus: setButtonsStatus,
  } = useQuery<DogsResponse>({
    apiCall: API.getDogs,
    initialStatus: "loading",
  });

  useEffect(() => {
    if (data?.message) {
      const dogsArray = Object.keys(data.message);
      setAllDogs(dogsArray);
      setFilteredDogs(dogsArray);
    }
  }, [data]);

  if (error){
  }

  return (
    <Container>
      <Header
        allDogs={allDogs}
        setButtonsStatus={setButtonsStatus}
        setImagesStatus={setImagesStatus}
        setFilteredDogs={setFilteredDogs}
        setActiveDog={setActiveDog}
      ></Header>
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
