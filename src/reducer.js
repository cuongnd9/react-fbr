const initialState = {
  screen1: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case '@screen1/save':
      return {
        ...state,
        screen1: action.payload
      }
    default:
      return state;
  }
}

export default reducer;
