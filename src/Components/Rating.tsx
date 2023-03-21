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
    let [touchRating, setTouchRating] = useState(0)
    let [rating, setRating] = useState(0)

    const onMouseLeaveLiHandler = () => {
        setTouchRating(0)
    }
    return (
        <ul style={styleUl} onMouseLeave={onMouseLeaveLiHandler}>
            <ItemRating isTouch={touchRating > 0} rating={rating} id={'1'} setTouchRating={setTouchRating}
                        setRating={setRating}/>
            <ItemRating isTouch={touchRating > 1} rating={rating} id={'2'} setTouchRating={setTouchRating}
                        setRating={setRating}/>
            <ItemRating isTouch={touchRating > 2} rating={rating} id={'3'} setTouchRating={setTouchRating}
                        setRating={setRating}/>
        </ul>
    );
};


type ItemRatingPropsType = {
    isTouch: boolean
    rating: number
    id: string
    setTouchRating: (rating: number) => void
    setRating: (rating: number) => void
}

const ItemRating = (props: ItemRatingPropsType) => {

    const onMouseMoveLiHandler = (e: MouseEvent<HTMLLIElement>) => {
        props.rating || props.setTouchRating(parseFloat(e.currentTarget.id))
    }

    const onClickLiHandler = () => {
        props.rating || props.setRating(parseFloat(props.id))
    }

    let isRatingItem = props.rating > parseFloat(props.id) - 1
    let ratingStyle = isRatingItem ? {...styleLi, backgroundColor: 'blue'} : styleLi
    let touchStyle = props.isTouch ? {...styleLi, backgroundColor: 'lightblue'} : styleLi
    let currentStyle = isRatingItem ? ratingStyle : touchStyle


    return (
        <li style={currentStyle}
            id={props.id}
            onMouseMove={onMouseMoveLiHandler}
            onClick={onClickLiHandler}
        >

        </li>
    )
}

export default Rating;