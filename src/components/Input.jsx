import React from 'react'

import './input.css'

export default function Input(props) {

  const {value } = props





  const handleChange = (e) => {
    console.log(e.target.value)
    
  }



  return (
    <div>
        <input onChange={handleChange} value={value}></input>
    </div>
  )
}
