import React, {KeyboardEvent, MouseEventHandler, useEffect, useState} from "react";
import classes from "./Accordion.module.css"

export type ItemsTypes = {
    title: string,
    country: string,
    population: number
    id: number
}

type SelectPropsType = {
    title: string,
    body: ItemsTypes[],
    onChange: (title: string) => void
}

export function Select(props: SelectPropsType): JSX.Element {
    const [isCollapsed, SetIsCollapsed] = useState(true)
    console.log('Select rendered')

    const onClickTitleHandler = () => {
        SetIsCollapsed(!isCollapsed)
    }

    const chooseItem = (title: string) => {
        props.onChange(title)
        SetIsCollapsed(true)
    }

    const onBlurHandler = () => {
        SetIsCollapsed(true)
    }

    const onPressUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        const items = props.body
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            const currentItem = items.find(el=>el.title === props.title)
            const isArrowDown = e.key === 'ArrowDown'

            if (currentItem) {
                const nextItemIndex = isArrowDown ? currentItem.id + 1 : currentItem.id - 1
                const edgeItems = isArrowDown ? items.length - 1 : 0
                const isNotLastItem = isArrowDown ?
                    items.indexOf(currentItem) < edgeItems :
                    items.indexOf(currentItem) > edgeItems
                const newCurrentItem = isNotLastItem && items.find(el => el.id === nextItemIndex)
                newCurrentItem && props.onChange(newCurrentItem.title)
            }
        }
    }

    const styleBody =  classes.body + ' ' + (isCollapsed ? classes.bodyHidden : '')

    return (

        <div className={classes.mainWrapper}
             tabIndex={1}
             onBlur={onBlurHandler}
             onKeyUp={onPressUpHandler}
        >
            <SelectTitle title={props.title} onClick={onClickTitleHandler}/>
            <SelectBody body={props.body}
                        style={styleBody}
                        chooseItem={chooseItem}
                        currentTitle={props.title}
            />
        </div>
    )
}
//-------------------------------

type SelectTitlePropsType = {
    title: string
    onClick: () => void
}

function SelectTitle(props: SelectTitlePropsType): JSX.Element {
    return (
        <p onClick={props.onClick} className={classes.title}> {props.title}</p>
    )
}
//------------------------


type SelectBodyPropsType = {
    body: ItemsTypes[]
    style: string
    chooseItem: (title: string) => void
    currentTitle: string
}

function SelectBody(props: SelectBodyPropsType): JSX.Element {
    const [currentTitle, setCurrentId] = useState<string>(props.currentTitle)

    useEffect(() => {
        setCurrentId(props.currentTitle)
    }, [props.currentTitle])

    const items = props.body.map(el => {
        const choosingItem = () => {
            props.chooseItem(el.title)
            setCurrentId(el.title)
        }

        const isCurrentTitle = currentTitle === el.title
        //isCurrentTitle && setCurrentId(el.id)

        const styleItem = classes.item + ' ' + (isCurrentTitle ? classes.current : ' ')

        return (
            <li
                key={el.id}
                className={styleItem}
                onClick={choosingItem}
                onMouseEnter={() => setCurrentId(el.title)}
            >
                {el.title}
            </li>
        )
    })

    return (
        <ul className={props.style}>
            {items}
        </ul>
    )
}
