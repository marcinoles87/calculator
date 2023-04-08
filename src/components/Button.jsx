import React from 'react'

import './button.css'

export default function Button(props) {
  
  let {value, setValue} = props

  const handleClick = (e) => {
    const val = e.target.value
    setValue(
      value = val
    )

    
  }

  
  return (
    <div>
        <button onClick={handleClick} value={value}>{value}</button>
    </div>
  )
}
