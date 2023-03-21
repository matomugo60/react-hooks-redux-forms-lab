import React, { useState } from 'react'

function BandInput({ onBandSubmit }) {
  const [name, setName] = useState('')

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onBandSubmit(name)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type='text' onChange={handleChange} value={name} />
        </label>
        <button type='submit'>Add Band</button>
      </form>
    </div>
  )
}

export default BandInput