const loggedIn = (state = false, action) => {
console.warn(state)
console.warn(action)
    switch (action.type) {
      case 'CHANGE_LOGGED_IN':
          return action.loggedIn
      default:
        return state
    }
  }
  
  export default loggedIn