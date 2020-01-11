export const errorMsg = ( state = '', action ) => {
  switch(action.type) {
      case 'HAS_ERROR':
          return action.error;
      default:
          return state;
  }
}