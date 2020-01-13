export const succeededMsg = (state='', action) => {
    switch(action.type) {
      case 'SUCCESS_MSG':
        return action.msg;
      default:
        return state;
    }
}