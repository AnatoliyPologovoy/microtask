import React, {MouseEvent, useState} from 'react';
import './App.css';
import { Button } from './Components/Button';
import { ShowList } from './Components/ShowList';




function App() {

  // const cbForButton = (evt : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   console.log(evt);
  const [money, setMoney] = useState([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ])     

  // const showMoney = (name : string) => {
  //   money.filter((curr)=>curr.banknots === name)
  //   setMoney(money);
  // }

  let currentMoney = money;

  const[filter, setFilter] = useState('all')

  const onClickHandler = (nameButton:string) => {
    //nameButton = name;
    setFilter(nameButton);
  }
  if (filter === 'Dollars') {
    currentMoney = money.filter((curr)=>curr.banknots === 'Dollars');
  }
  if (filter === 'RUBLS') {
    currentMoney = money.filter((curr)=>curr.banknots === 'RUBLS');
  }
  

    
  return(
    <div className={'APP'}>
      <ShowList money={currentMoney}/>
      {/* <Button name='Show Dollars' callBack={()=>showMoney('Dollars')}/> 
      <Button name='Show Rouble' callBack={()=>showMoney('RUBLS')}/>  */}
      <Button name='Show Dollars' callBack={()=>onClickHandler('Dollars')}/> 
      <Button name='Show Rouble' callBack={()=>onClickHandler('RUBLS')}/> 

    </div>
  );
}

export default App;
