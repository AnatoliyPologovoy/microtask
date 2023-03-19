import React, {useState} from 'react';
import './App.css';
import {Input} from './components/Input';
import {Button} from "./components/Button";
import Rating from "./components/Rating";


function App() {
    const [messages, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )
    let [text, setText] = useState<string>('')

    const callBackForButton = () => {
        setMessage([{message: text}, ...messages])
        setText('')
    }

    const renderMessages = messages.map((el, index) => {
        return (
            <div key={index}>

                {el.message}
                <Rating/>
            </div>
        )
    })

    return (
        <div className="App">

            <Input text={text} setText={setText}/>
            <Button name='+' callBack={callBackForButton}/>
            {renderMessages}
        </div>
    );
}

export default App;
