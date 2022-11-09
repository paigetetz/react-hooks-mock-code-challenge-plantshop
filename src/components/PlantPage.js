import React, { useEffect, useState }from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
const URL = 'http://localhost:6001/plants'
function PlantPage() {

  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState('');

  const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))
  const addPlant = (newPlant) => {setPlants([...plants, newPlant])}; 



  useEffect(() => {
    fetch(URL)
    .then(response => response.json())
    .then(data => setPlants(data))
  },[])

  return (
    <main>
      <NewPlantForm addPlant = {addPlant}/>
      <Search search = {search} setSearch = {setSearch}/>
      <PlantList plants = {filteredPlants}/>
    </main>
  );
}

export default PlantPage;
