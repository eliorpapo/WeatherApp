const INITIAL_STATE = {
  favorites: [],
}

export function favoriteReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_FAVORITES':
      return {
        favorites: [...action.favorites],
      }

    case 'ADD_FAVORITE':
      return {
        favorites: [...state.favorites, action.favorite],
      }

    case 'REMOVE_FAVORITE':
      return {
        favorites: state.favorites.filter(
          (favorite) => favorite.key !== action.favoriteKey
        ),
      }
    default:
      return state
  }
}
