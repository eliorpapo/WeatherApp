import { storageService } from './storageService.js'

export const favoriteService = {
  query,
  addToFavorites,
  remove,
  isFavorite,
}

const STORAGE_KEY = 'favorites'

var gFavorites = _loadFavorites()

function query() {
  const favoritesToReturn = gFavorites
  return Promise.resolve([...favoritesToReturn])
}

function isFavorite(key) {
  const idx = gFavorites.findIndex((favorite) => favorite.key === key)
  if (idx !== -1) return Promise.resolve(true)
  else return Promise.resolve(false)
}

function remove(key) {
  const idx = gFavorites.findIndex((favorite) => favorite.key === key)
  gFavorites.splice(idx, 1)
  storageService.store(STORAGE_KEY, gFavorites)
  return Promise.resolve()
}

function addToFavorites(favoriteToAdd) {
  const idx = gFavorites.findIndex(
    (favorite) => favorite.key === favoriteToAdd.key
  )
  if (idx !== -1) return
  const favorite = {
    name: favoriteToAdd.name,
    key: favoriteToAdd.key,
  }
  gFavorites.push(favorite)

  storageService.store(STORAGE_KEY, gFavorites)
  return Promise.resolve(favorite)
}

function _loadFavorites() {
  let favorites = storageService.load(STORAGE_KEY)
  if (!favorites || !favorites.length) favorites = []
  storageService.store(STORAGE_KEY, favorites)
  return favorites
}
