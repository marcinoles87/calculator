import React from 'react'

import './input.css'

export default function Input(props) {

  const {value } = props

  let inputValue = ''



  const handleChange = (value , inputValue) => {
    console.log(value)
    console.log(inputValue)
  }



  return (
    <div>
        <input onChange={handleChange} >{inputValue}</input>
    </div>
  )
}
