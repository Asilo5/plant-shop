export const favouritePlants = (state='', action) => {
  switch(action.type) {
      case 'ADD_FAVOURITE':
        return [...state, action.id]
      case 'DELETE_FAVOURITE':
        return 
  }
}