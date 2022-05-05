import { FavoriteCities } from './pages/FavoriteCities'
import { PopularCities } from './pages/PopularCities'
import { SearchCity } from './pages/SearchCity'
import { RandomCities } from './pages/RandomCities'
import { MainHeader } from './components/MainHeader'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='app'>
        <MainHeader />
        <main className='container'>
          <Routes>
            <Route path='/' element={<RandomCities />} />
            <Route path='/favorites' element={<FavoriteCities />} />
            <Route path='/popular' element={<PopularCities />} />
            <Route path='/search' element={<SearchCity />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
