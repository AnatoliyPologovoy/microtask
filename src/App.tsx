import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid'
import {Select} from "./components/Accordion";

export type FilterValuesType = "all" | "active" | "completed";

export type TodoListsType = {
    id: string
    title: string
    filter: FilterValuesType
}

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type statTaskType = {
    [key: string] : TaskType[]
}

function App() {
    const Cities = [
        {
            title: 'Moscow',
            id: 1
        },
        {
            title: 'London',
            id: 2
        },
        {
            title: 'Paris',
            id: 3
        },
        {
            title: 'Berlin',
            id: 4
        }
    ]

    const [titleValue, setTitleValue] = useState<string>('Cities')
    // const onChange = (title: string) => {
    //     setTitleValue(title)
    // }

    return (
        <div className="App">
            <Select title={titleValue} body={Cities} onChange={setTitleValue}/>
        </div>
    );
}

export default App;
