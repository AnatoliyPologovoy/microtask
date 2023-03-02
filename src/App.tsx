import React, {MouseEvent} from 'react';
import './App.css';
import { Button } from './Components/Button';



function App() {

  // const cbForButton = (evt : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   console.log(evt);
    
  return(
    <div>
      <Button name={'Click me'}/>
      <Button name={'Dont touch me'}/>
    </div>
  );
}

export default App;
