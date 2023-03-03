import React, {MouseEvent, useState} from 'react';
import './App.css';
import { Button } from './Components/Button';




function App() {

  // const cbForButton = (evt : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   console.log(evt);
    const foo1 = (subscriber:string) => {
        return  console.log(subscriber);
    }
    let [a, setA] = useState(1);
    const foo3 = ()=>{
        setA(++a)
    }
    const reset = () => {
        setA(a = 0);
    }
    
  return(
    <div className={'APP'}>
      <Button name={'Click me'} callBack={()=>foo1('lera')}/>
        <p>{a}</p>
      <Button name={'Count'} callBack={foo3}/>
      <Button name={'0'} callBack={reset}/>


      {/*<Button name={'Stupid'} callBack={foo3}/>*/}
    </div>
  );
}

export default App;
