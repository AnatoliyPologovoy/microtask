import React, {MouseEvent, useState} from 'react';
import './App.css';
import { Button } from './Components/Button';
import { ShowList } from './Components/ShowList';

export type FilterType = 'Dollars' | 'RUBLS' | 'all';

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

  let currentMoney = money;

  const[filter, setFilter] = useState<FilterType>('all')

  const onClickHandler = (nameButton:FilterType) => {
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
      <ShowList money={currentMoney} cbForButton={onClickHandler}/>
    </div>
  );
}

export default App;
