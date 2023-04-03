import React, {ChangeEvent, useState} from "react";

type FullInputPropsType = {
    addMessage : (text:string) => void
}

export const FullInput:React.FC<FullInputPropsType> = (props) => {
    let [text, setText] = useState<string>('')

    const onChangeInputHandler = (evt:ChangeEvent<HTMLInputElement>) => {
        setText(evt.currentTarget.value);
       
    }

    const onClickButtonHandler = () => {
        props.addMessage(text);
        setText('');
        
    }

    return (
        <div>
            <input value={text} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    )
}