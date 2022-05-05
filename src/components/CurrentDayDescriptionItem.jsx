export const CurrentDayDescriptionItem = ({ name, Imperial, Metric }) => {
  return (
    <div className='current-day-description-item'>
      <p className='bold uppercase'>{name}</p>
      <p>
        {Metric.Value} {Metric.Unit}
      </p>
    </div>
  )
}
