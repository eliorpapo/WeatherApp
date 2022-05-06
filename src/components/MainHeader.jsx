import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'

export const MainHeader = () => {
  const navLinks = [
    { to: '/', name: 'Home' },
    { to: '/favorites', name: 'Favorites' },
    { to: '/popular', name: 'Main Cities' },
    { to: '/search', name: 'search' },
  ]

  const toggleIsMetric = async () => {
    console.log(`toggleIsMetric`)
  }

  const toggleDarkMode = async () => {
    console.log(`toggleDarkMode`)
  }

  return (
    <header className='app-header'>
      <section className='header-container'>
        <h1 className='logo'>Weather App</h1>
        <div className='toggle-btns'>
          <Tooltip title='Toggle Scale'>
            <Button id='header-toggle-btn' onClick={toggleIsMetric}>
              C&deg;
            </Button>
          </Tooltip>
          <Tooltip title='Toggle Dark Mode'>
            <Button id='header-toggle-btn' onClick={toggleDarkMode}>
              Dark
            </Button>
          </Tooltip>
        </div>
        <nav className='nav-btns'>
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
