import React, {useMemo, useState} from 'react';
import {v1} from 'uuid'
import {ItemsTypes, Select} from "./Select";

const worldsCities: ItemsTypes[] = [
    {
        title: 'Moscow',
        country: 'Russia',
        population: 16000000,
        id: 1
    },
    {
        title: 'London',
        country: 'England',
        population: 6000000,
        id: 2
    },
    {
        title: 'Paris',
        country: 'France',
        population: 8000000,
        id: 3
    },
    {
        title: 'Berlin',
        country: 'Germany',
        population: 12000000,
        id: 4
    },
    {
        title: 'Munich',
        country: 'Germany',
        population: 1400000,
        id: 5
    },
    {
        title: 'Nice',
        country: 'France',
        population: 2000000,
        id: 6
    },
    {
        title: 'Liverpool',
        country: 'England',
        population: 3000000,
        id: 7
    },
    {
        title: 'Sankt-Petersburg',
        country: 'Russia',
        population: 6000000,
        id: 8
    }
]

const Select1 = React.memo(Select)
const Select2 = React.memo(Select)
const Select3 = React.memo(Select)

export type SelectsWithMemoPropsType = {}

export function SelectsWithMemo() {
    const [cities, setCities] =useState<ItemsTypes[]>(worldsCities)
    const [titleValue, setTitleValue] = useState<string>('Cities')
    let [count, setCount] = useState(0)

    const russiansCities = useMemo(() => {
        return cities.filter(city => city.country === 'Russia')

    }, [cities])

    const citiesIncludesE = useMemo(() => {
        return cities.filter(city => city.title.toLowerCase().includes('e'))
    }, [cities])

    const more5kkPopulation = useMemo(()=>{
        return cities.filter(city => city.population > 5000000)
    }, [cities])


    return (
        <div className="App">
            <p>{count}</p>
            <button style={{margin: "10px"}} onClick={() => setCount(count+=1)}>+</button>
            <Select1 title={titleValue} body={russiansCities} onChange={setTitleValue}/>
            <Select2 title={titleValue} body={citiesIncludesE} onChange={setTitleValue}/>
            <Select3 title={titleValue} body={more5kkPopulation} onChange={setTitleValue}/>
        </div>
    );
}


