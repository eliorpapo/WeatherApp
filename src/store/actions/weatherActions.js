import { apiService } from '../../services/apiService'
import { toast } from 'react-toastify'

export function setCity(selectedCity) {
  return async (dispatch) => {
    try {
      if (!selectedCity) {
        selectedCity = await apiService.locateCity()
      }
      dispatch({ type: 'SET_SELECTED_CITY', selectedCity })
    } catch (err) {
      toast.error(err.message)
    }
  }
}
export function setIsMetric(isMetric) {
  return async (dispatch) => {
    try {
      dispatch({ type: 'SET_ISMETRIC', isMetric })
    } catch (err) {
      toast.error(err.message)
    }
  }
}
