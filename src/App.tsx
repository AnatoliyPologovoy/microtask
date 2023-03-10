import React, {MouseEvent, useState} from 'react';
import './App.css';
import {FullInput} from "./Components/FullInput";


function App() {
    const [messages, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    const addMessage = (text:string) => {
        setMessage([{message:text}, ...messages])
    }

    return (
        <div className="App">
            <FullInput addMessage={addMessage}/>
            {messages.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;
