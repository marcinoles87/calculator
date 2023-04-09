import React from 'react'

import './button.css'

export default function Button(props) {
  
  let {value, setValue , setPlus} = props

  const handleClick = (e) => {
    const val = e.target.value
    setValue(
      value = val
    )

    setPlus(
      console.log('sss')

    )

    
  }

  
  return (
    <div>
        <button onClick={handleClick} value={value}>{value}</button>
    </div>
  )
}
