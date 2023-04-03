import React, { ChangeEvent } from "react"

type InputPropsType = {
    text: string
    setText : (text: string) => void
}

export const Input:React.FC<InputPropsType> = (props) => {
    const onChangeInputHandler = (evt:ChangeEvent<HTMLInputElement>) => {
        props.setText(evt.currentTarget.value);
       
    }

    return (
        <>
            <input value={props.text} onChange={onChangeInputHandler}/>
        </>
    )
}