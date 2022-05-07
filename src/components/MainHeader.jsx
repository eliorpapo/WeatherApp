import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import { useSelector, useDispatch } from 'react-redux'
import { setIsMetric } from '../store/actions/weatherActions'
import Hamburger from 'hamburger-react'
import { useState } from 'react'

export const MainHeader = ({ toggleDarkMode, isDarkMode }) => {
  const navLinks = [
    { to: '/', name: 'Home' },
    { to: '/favorites', name: 'Favorites' },
    { to: '/popular', name: 'Main Cities' },
    { to: '/search', name: 'search' },
  ]
  const [isOpen, setOpen] = useState(false)

  const { isMetric } = useSelector((state) => state.weatherModule)

  const dispatch = useDispatch()

  const toggleIsMetric = async () => {
    dispatch(setIsMetric(!isMetric))
  }

  const btnMetricTxt = isMetric ? 'Celsius' : 'Fahrenheit'
  const darkModeTxt = isDarkMode ? 'Light' : 'Dark'

  return (
    <header className='app-header'>
      <section className='header-container'>
        <h1 className='logo'>Weather App</h1>
        <div className='toggle-btns'>
          <Tooltip title='Toggle Scale'>
            <Button id='header-toggle-btn' onClick={toggleIsMetric}>
              {btnMetricTxt}&deg;
            </Button>
          </Tooltip>
          <Tooltip title='Toggle Dark Mode'>
            <Button id='header-toggle-btn' onClick={toggleDarkMode}>
              {darkModeTxt}
            </Button>
          </Tooltip>
        </div>
        <div className='hamburger'>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <nav className={isOpen ? 'nav-btns-small-screen' : 'nav-btns'}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              className={({ isActive }) => (isActive ? 'nav-active' : '')}
              to={link.to}
            >
              <Button id='nav-btn' variant='outlined'>
                {link.name}
              </Button>
            </NavLink>
          ))}
        </nav>
      </section>
    </header>
  )
}
