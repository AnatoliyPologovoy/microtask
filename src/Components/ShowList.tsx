import {Button} from "./Button";
import React from "react";
import {FilterType} from "../App";

type ShowListType = {
    money: ItemListType[];
    cbForButton : (value:FilterType) => void
}

type ItemListType = {
    banknots: string,
    value: number,
    'number': string
}

export const ShowList = (props: ShowListType) => {
    let list = props.money.map((curr, i) => {
        return (
            <li key={i + 1}>{
                `banknots: ${curr.banknots} value is: ${curr.value}, number is ${curr.number}`
            }</li>
        )
    })


    return (
        <>
            <ul>
                {list}
            </ul>
            <Button name='Show Dollars' callBack={()=>props.cbForButton('Dollars')}/>
            <Button name='Show Rouble' callBack={()=>props.cbForButton('RUBLS')}/>
        </>
    )
}