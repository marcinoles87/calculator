import React from 'react'

import './input.css'

export default function Input(props) {

  const {value } = props
  return (
    <div>
        <input value={value}></input>
    </div>
  )
}
