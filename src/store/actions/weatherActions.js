import { apiService } from '../../services/apiService'

export function setCity(selectedCity) {
  return async (dispatch) => {
    try {
      if (!selectedCity) {
        selectedCity = await apiService.locateCity()
      }
      dispatch({ type: 'SET_SELECTED_CITY', selectedCity })
    } catch (err) {
      console.log('err.message', err.message)
    }
  }
}
