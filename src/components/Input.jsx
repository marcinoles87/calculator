import React from 'react'

import './input.css'

export default function Input(props) {

  const {value } = props

  const handleChange = (e) => {
    let a = e.target.value
    a++

  }

  return (
    <div>
        <input onChange={handleChange} value={value}></input>
    </div>
  )
}
