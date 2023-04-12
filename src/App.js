import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';

function App() {

  let [value , setValue] = useState(0)

  let [plus , setAdd] = useState('')

  let [suma , setSuma] = useState(0)

  const setPlus = (e) => {

    console.log(e.target.value)
    setAdd({
      plus : ++e.target.value
  })
  }


  const setInputValue = (val) => {
    console.log(val)
    setValue(
      value = value + val
    )

    console.log(value)
    
  }

  const setInputClear = () => {
    setValue (
      value = ''
    )
  }

  const setSum = () => {
    console.log(value)
    let number = parseInt(value)
    console.log(number)
    setSuma(

      suma = number+number
      
    )

    setInputValue(
      value = suma
    )
        console.log(suma)
  }

  
 




  return (
    <div className="App">
      <h1>MRC CALCULATOR</h1>
      <Input value={value} setInputValue={setInputValue}></Input>
      <Button value={1} setValue={setInputValue}></Button>
      <Button value={2} setValue={setInputValue}></Button>
      <Button value={3} setValue={setInputValue}></Button>
      <Button value={'+'} setValue={setInputValue}></Button>
      <Button value={4} setValue={setInputValue}></Button>
      <Button value={5} setValue={setInputValue}></Button>
      <Button value={6} setValue={setInputValue}></Button>
      <Button value={'-'} setValue={setInputValue}></Button>
      <Button value={7} setValue={setInputValue}></Button>
      <Button value={8} setValue={setInputValue}></Button>
      <Button value={9} setValue={setInputValue}></Button>
      <Button value={0} setValue={setInputValue}></Button>
      <Button value={'c'} setValue={setInputClear}></Button>
      <Button value={'='} setValue={setSum}></Button>
     
      
    </div>
  );
}

export default App;
