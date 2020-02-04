const initialState = {
  screen1: {},
  doRefreshToHome: true
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case '@screen1/save':
      return {
        ...state,
        screen1: action.payload
      }
    case '@global/refreshToHome':
      return {
        ...state,
        doRefreshToHome: false
      }
    default:
      return state;
  }
}

export default reducer;
