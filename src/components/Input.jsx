import React from 'react'

import './input.css'

export default function Input(props) {

  const {value } = props

  const handleChange = (e) => {
    let a =  e.target.value 
    a = parseInt(a)

    let b = value
    b = parseInt(value)

   


  }



  const setInputValue = (e) => {
    console.log(e.target.value)
    return e.target.value
    
  }

  console.log(value)

  

  return (
    
        <input onChange={setInputValue} value={value}/>
    
  )
}
