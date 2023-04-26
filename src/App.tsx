import React from 'react';
import './App.css';
import {v1} from 'uuid'
import {SelectsWithMemo} from "./components/SelectsWithMemo";

export type AppPropsType = {}

function App() {

    return (
        <div className="App">
            <SelectsWithMemo/>
        </div>
    );
}

export default App;
