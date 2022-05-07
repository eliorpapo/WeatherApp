import { favoriteService } from '../../services/favoriteService'
import { toast } from 'react-toastify'

export function loadFavorites() {
  return async (dispatch, getState) => {
    try {
      const favorites = await favoriteService.query()
      dispatch({ type: 'SET_FAVORITES', favorites })
    } catch (err) {
      toast.error(err.message)
    }
  }
}

export function removeFavorite(favoriteKey) {
  return async (dispatch) => {
    try {
      await favoriteService.remove(favoriteKey)
      toast.success('City Removed Successfully')
      dispatch({ type: 'REMOVE_FAVORITE', favoriteKey })
    } catch (err) {
      toast.error(err.message)
    }
  }
}

export function addFavorite(favoriteToAdd) {
  return async (dispatch) => {
    try {
      const favorite = await favoriteService.addToFavorites(favoriteToAdd)
      toast.success('City Added Successfully')
      dispatch({ type: 'ADD_FAVORITE', favorite })
    } catch (err) {
      toast.error(err.message)
    }
  }
}
