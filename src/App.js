import { FavoriteCities } from './pages/FavoriteCities'
import { PopularCities } from './pages/PopularCities'
import { MainHeader } from './components/MainHeader'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='app'>
        <MainHeader />
        <main className='container'>
          <Routes>
            <Route exact path='/' element={<PopularCities />} />
            <Route path='/favorites' element={<FavoriteCities />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
