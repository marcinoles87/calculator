import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';

function App() {

  let [value , setValue] = useState()

  setValue = () =>{
    value = 1
  }

  return (
    <div className="App">
      <Input value={value}></Input>
      <Button value={value} setValue={setValue}></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      
    </div>
  );
}

export default App;
