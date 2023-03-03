type ListType = {
  money : ItemListType[];
}

type ItemListType = {
    banknots : string,
    value : number,
    'number' : string
}

export const ShowList = (props:ListType) => {
    let list = props.money.map((curr, i) => {
        return (
            <li key={i+1}>{
                `banknots: ${curr.banknots} value is: ${curr.value}, number is ${curr.number}`
            }</li>
        )
    })

    return (
        <ul>
            {list}
        </ul>
    )
}