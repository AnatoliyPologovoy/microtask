import React, { useState } from 'react';
import './App.css';
import { Button } from './Components/Button';
//import {FullInput} from "./Components/FullInput";
import { Input } from './Components/Input';


function App() {
  // eslint-disable-next-line
    const [messages, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )
    let [text, setText] = useState<string>('')
    // const addMessage = (text:string) => {
    //     setMessage([{message:text}, ...messages])
    // }
    const callBackForButton = () => {
        setMessage([{message:text}, ...messages])
        setText('')        
    }

    return (
        <div className="App">
            {/* <FullInput addMessage={addMessage}/> */}

            <Input text={text} setText={setText} />
            <Button name='+' callBack={callBackForButton}/> 
            {messages.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;
