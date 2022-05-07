import { useEffect, useRef, useState } from 'react'
import { apiService } from '../services/apiService'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { toast } from 'react-toastify'

export const SearchBar = ({ setCity }) => {
  const [SearchCity, setSearchCity] = useState('')
  const [cityOpts, setCityOpts] = useState([])

  let timeout = useRef()

  useEffect(() => {
    debounceCities()
  }, [SearchCity])

  const debounceCities = (delay = 300) => {
    clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      getCityOpts()
    }, delay)
  }

  const getCityOpts = async () => {
    if (!SearchCity) {
      setCityOpts([])
      return
    }
    const res = await apiService.autoComplete(SearchCity).catch((err) => {
      toast.error(err.message)
    })
    setCityOpts(res)
  }

  return (
    <Autocomplete
      className='city-search-bar'
      disablePortal
      id='combo-box-demo'
      onKeyUp={(ev) => setSearchCity(ev.target.value)}
      options={cityOpts}
      onChange={(ev, val) => {
        setCity(val)
      }}
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => (
        <Box
          component='li'
          sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading='lazy'
            width='20'
            src={`https://flagcdn.com/w20/${option.countryId.toLowerCase()}.png`}
            alt=''
          />
          {option.name}
        </Box>
      )}
      renderInput={(params) => <TextField {...params} label='City Name...' />}
    />
  )
}
