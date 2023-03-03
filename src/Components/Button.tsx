type ButtonPropsType = {
    name : string
    callBack? : ()=> void
}

export const Button = (props : ButtonPropsType) => {

    const onClickHandler = () => {

        // @ts-ignore
        props.callBack()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}