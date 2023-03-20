import React, {MouseEvent, useState} from 'react';

let styleLi = {
    width: '5px',
    height: '5px',
    borderRadius: '50%',
    border: '1px solid blue',
    marginLeft: '2px',
    cursor: 'pointer',
}

let styleUl = {
    margin: '0',
    padding: '0',
    listStyle: 'none',
    display: 'inline-flex',
}

const Rating = () => {
    let [rating, setRating] = useState(0)



    const onMouseDownLiHandler = (e:MouseEvent<HTMLLIElement>) => {
        setRating(parseFloat(e.currentTarget.id))
    }

    return (
        <ul style={styleUl}>
            <ItemRating isActive={rating > 0} id={'1'} onMouseDown={onMouseDownLiHandler} onMouseMove={onMouseDownLiHandler} />
            <ItemRating isActive={rating > 1} id={'2'} onMouseDown={onMouseDownLiHandler} onMouseMove={onMouseDownLiHandler} />
            <ItemRating isActive={rating > 2} id={'3'} onMouseDown={onMouseDownLiHandler} onMouseMove={onMouseDownLiHandler} />
        </ul>
    );
};

type ItemRatingPropsType = {
    isActive: boolean
    id: string
    onMouseDown: (e:MouseEvent<HTMLLIElement>)=> void
    onMouseMove: (e:MouseEvent<HTMLLIElement>)=> void
}

const ItemRating = (props:ItemRatingPropsType) => {
    let currentStyle = props.isActive ? {...styleLi, backgroundColor: 'blue'} : styleLi

    return (
        <li style={currentStyle}
            id={props.id}
            onMouseMove={props.onMouseMove}
            onMouseDown={props.onMouseDown}>

        </li>
    )
}

export default Rating;