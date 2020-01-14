export const getPlants = async () => {

      const resp = await fetch('http://localhost:3001');
      const data = await resp.json();

      if (!resp.ok) {
        const error = await resp.json();
        throw new Error(error.message);
      }

      return data;
   
}

export const postPlant = async (plant) => {
  const plantInfo = {
    name: plant.name, 
    description: plant.description, 
    care: plant.care, 
    price: plant.price, 
    image: plant.image
  }; 

  const options = {
    method: 'POST',
    body: JSON.stringify(plantInfo),
    headers: {
      'Content-Type' : 'application/json'
    }
  };

  const resp = await fetch('http://localhost:3001/addPlant', options);

  const data = await resp.json();

      if (!resp.ok) {
        const error = await resp.json();
        throw new Error(error.message);
      }

  return data;
}

export const deletePlantFetch = async (id) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type' : 'application/json'
    }
  };

  const resp = await fetch(`http://localhost:3001/deletePlant/${id}`, options)
  const data = await resp.json();

  if (!resp.ok) {
    const error = await resp.json();
    throw new Error(error.message);
  }

   return data;
  
}