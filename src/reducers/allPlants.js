export const allPlants = ( state = [], action ) => {
    switch(action.type) {
       case 'ADD_PLANTS':
           return action.setPlants;
       case 'NEW_PLANT':
           return [...state, action.plant];
       case 'DELETE_PLANT':
           return state.filter((plant) => plant._id !== action.id);
        default:
            return state;
    }
}