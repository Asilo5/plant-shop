export const allPlants = ( state = [], action ) => {
    switch(action.type) {
       case 'ADD_PLANTS':
           return action.setPlants;
       case 'NEW_PLANT':
           return [...state, action.newPlant]
        default:
            return state;
    }
}