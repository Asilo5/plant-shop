export const addPlants = (setPlants) => ({
    type: 'ADD_PLANTS',
    setPlants
});

export const hasError = (error) => ({
  type: 'HAS_ERROR',
  error
});

export const newPlant = (plant) => ({
  type: 'NEW_PLANT',
  plant
});

export const successMsg = (msg) => ({
   type: 'SUCCESS_MSG',
   msg
});

export const deletePlant = (id) => ({
  type: 'DELETE_PLANT',
  id
})