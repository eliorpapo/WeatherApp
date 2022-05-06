import { favoriteService } from '../../services/favoriteService'

export function loadFavorites() {
  return async (dispatch, getState) => {
    try {
      const favorites = await favoriteService.query()
      dispatch({ type: 'SET_FAVORITES', favorites })
    } catch (err) {
      console.log(err.message)
    }
  }
}

export function removeFavorite(favoriteKey) {
  return async (dispatch) => {
    try {
      await favoriteService.remove(favoriteKey)
      dispatch({ type: 'REMOVE_FAVORITE', favoriteKey })
    } catch (err) {
      console.log(err.message)
    }
  }
}

export function addFavorite(favoriteToAdd) {
  return async (dispatch) => {
    try {
      const favorite = await favoriteService.addToFavorites(favoriteToAdd)
      dispatch({ type: 'ADD_FAVORITE', favorite })
    } catch (err) {
      console.log(err.message)
    }
  }
}
