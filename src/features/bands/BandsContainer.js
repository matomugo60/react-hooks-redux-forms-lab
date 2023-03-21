import React from 'react'
import BandInput from './BandInput'
import { bandAdded } from './bandsSlice'
import { useSelector, useDispatch } from 'react-redux'
function BandsContainer() {
  const bands = useSelector((state) => state.bands.entities)
  const dispatch = useDispatch()

  const handleBandSubmit = (name) => {
    dispatch(bandAdded(name))
  }
  return (
    <div>
      <BandInput onBandSubmit={handleBandSubmit} />
      <ul>
        {bands.map((band, index) => (
          <li key={index}> {band} </li>
        ))}
      </ul>
    </div>
  )
}

export default BandsContainer
