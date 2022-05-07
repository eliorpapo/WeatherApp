import { FavoriteCities } from './pages/FavoriteCities'
import { PopularCities } from './pages/PopularCities'
import { SearchCity } from './pages/SearchCity'
import { RandomCities } from './pages/RandomCities'
import { MainHeader } from './components/MainHeader'
import { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [isDark, setIsDark] = useState(false)
  const appTheme = isDark ? 'dark-mode' : 'app'

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev)
  }

  return (
    <Router>
      <div className={appTheme}>
        <ToastContainer position='bottom-center' autoClose={3000} />
        <MainHeader toggleDarkMode={toggleDarkMode} isDarkMode={isDark} />
        <main className='container'>
          <Routes>
            <Route path='/' element={<RandomCities />} />
            <Route path='/favorites' element={<FavoriteCities />} />
            <Route path='/popular' element={<PopularCities />} />
            <Route path='/search' element={<SearchCity />} />
            <Route path='*' element={<Navigate replace to='/' />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
