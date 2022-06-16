const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // clear the image component
    setImagesStatus("ready");

    // clear the active dog
    setActiveDog("");

    // capture user input
    const filter = event.target.value.toLowerCase();

    // an array of dogs that match the search
    const filteredList = allDogs.filter((dog) => {
      return dog.indexOf(filter) !== -1;
    });

    // if match
    if (filteredList.length) {
      setButtonsStatus("loaded");
      // if no match
    } else {
      setButtonsStatus("none");
    }

    // set the array, even if empty
    setFilteredDogs(filteredList);
  };