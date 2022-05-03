export const CurrentDayDescriptionItem = ({ name, value, unit }) => {
  return (
    <div className='current-day-description-item'>
      <p className='bold uppercase'>{name}</p>
      <p>
        {value} {unit}
      </p>
    </div>
  )
}
