import React from 'react'

import './input.css'

export default function Input(props) {

  const {value } = props

  const handleChange = (e) => {
    let a =  e.target.value 
    a = parseInt(a)

    let b = value
    b = parseInt(value)

    console.log(a+b)


  }

  const setInputValue = (e) => {
    
    return value + e.target.value
  }

  console.log(value)

  return (
    <div>
        <input onChange={handleChange} value={value}></input>
    </div>
  )
}
