import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';

function App() {

  let [value , setValue] = useState()

  setValue = () =>{
    value = value
  }


  return (
    <div className="App">
      <Input value={value}></Input>
      <Button value={1} setValue={setValue}></Button>
      <Button value={2} setValue={setValue}></Button>
      <Button value={3} setValue={setValue}></Button>
      <Button value={4} setValue={setValue}></Button>
      <Button value={5} setValue={setValue}></Button>
      <Button value={6} setValue={setValue}></Button>
      <Button value={7} setValue={setValue}></Button>
      <Button value={8} setValue={setValue}></Button>
      <Button value={9} setValue={setValue}></Button>
      <Button value={0} setValue={setValue}></Button>
     
      
    </div>
  );
}

export default App;
