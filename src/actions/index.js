export const addPlants = (setPlants) => ({
    type: 'ADD_PLANTS',
    setPlants
});

export const hasError = (error) => ({
  type: 'HAS_ERROR',
  error
});