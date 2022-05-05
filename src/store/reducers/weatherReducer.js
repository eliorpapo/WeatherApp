const INITIAL_STATE = {
  selectedCity: null,
}

export function weatherReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_SELECTED_CITY':
      return {
        ...state,
        selectedCity: action.selectedCity,
      }
    default:
      return state
  }
}
