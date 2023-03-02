type ButtonPropsType = {
    name : string
}

export const Button = (props : ButtonPropsType) => {
    return (
        <button onClick={ ()=> {}}>{props.name}</button>
    )
}