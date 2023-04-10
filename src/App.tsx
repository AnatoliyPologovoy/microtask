import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

export type TodoListsType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {
    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<TodoListsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    function removeTask(taskId: string, todoListId: string) {
        const updatedTasks = tasks[todoListId].filter(t => t.id !== taskId)
        setTasks({...tasks, [todoListId]: updatedTasks})
    }
    function addTask(title: string, todoListId: string) {
        let task = {id: v1(), title: title, isDone: false};
        const updatedTasks = [task, ...tasks[todoListId]]
        setTasks({...tasks, [todoListId]: updatedTasks})
    }
    function changeStatus(taskId: string, isDone: boolean, todoListId: string) {
        // const updatedTasks = tasks[todoListId].map(t => {
        //     return t.id === taskId ? {...t, isDone} : t
        // })
        // setTasks({...tasks, [todoListId]: updatedTasks})

        const task = tasks[todoListId].find(t => t.id === taskId)
        if (task) {
            task.isDone = isDone
            setTasks({...tasks, [todoListId]: [...tasks[todoListId]]})
        }
    }
    function changeFilter(value: FilterValuesType, todoListId: string) {
        setTodolists(todolists.map(tdl => {
                return tdl.id === todoListId ? {...tdl, filter: value} : tdl
            })
        )
    }


    const renderTodoLists = todolists.map(tdl => {
        let tasksForTodolist = tasks[tdl.id];

        if (tdl.filter === "active") {
            tasksForTodolist = tasksForTodolist.filter(t => !t.isDone);
        }
        if (tdl.filter === "completed") {
            tasksForTodolist = tasksForTodolist.filter(t => t.isDone);
        }


        return (
            <Todolist
                key={tdl.id}
                title="What to learn"
                id={tdl.id}
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeTaskStatus={changeStatus}
                filter={tdl.filter}
            />
        )
    })

    return (
        <div className="App">
            {renderTodoLists}
        </div>
    );
}

export default App;
