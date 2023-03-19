import React, {useState} from 'react';

const Rating = () => {
    let [rating, setRating] = useState(0)

    let styleLi = {
        width: '5px',
        height: '5px',
        borderRadius: '50%',
        border: '1px solid blue',
        marginLeft: '2px'
    }

    let styleUl = {
        margin: '0',
        padding: '0',
        listStyle: 'none',
        display: 'flex',
        width: '100px'
    }

    return (
        <ul style={styleUl}>
            <li style={styleLi}></li>
            <li style={styleLi}></li>
            <li style={styleLi}></li>
        </ul>
    );
};

export default Rating;