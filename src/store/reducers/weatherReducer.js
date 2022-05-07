const INITIAL_STATE = {
  selectedCity: null,
  isMetric: true,
}

export function weatherReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_SELECTED_CITY':
      return {
        ...state,
        selectedCity: action.selectedCity,
      }
    case 'SET_ISMETRIC':
      return {
        ...state,
        isMetric: action.isMetric,
      }
    default:
      return state
  }
}
