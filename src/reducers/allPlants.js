export const allPlants = ( state = [], action ) => {
    switch(action.type) {
       case 'ADD_PLANTS':
           return action.setPlants;
        default:
            return state;
    }
}