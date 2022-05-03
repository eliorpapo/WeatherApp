import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button'

export const MainHeader = () => {
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
          <Button id='header-toggle-btn' onClick={toggleIsMetric}>
            C&deg;
          </Button>
          <Button id='header-toggle-btn' onClick={toggleDarkMode}>
            Dark
          </Button>
        </div>
        <nav className='nav-btns'>
          <NavLink
            className={({ isActive }) => (isActive ? 'nav-active' : '')}
            to='/'
          >
            <Button id='nav-btn' variant='outlined'>
              Home
            </Button>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'nav-active' : '')}
            to='/favorites'
          >
            <Button id='nav-btn' variant='outlined'>
              Favorites
            </Button>
          </NavLink>
        </nav>
      </section>
    </header>
  )
}
