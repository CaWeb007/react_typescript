type User = {
    id: number
    first: string
    last: string
}

type ListProps<T> = {
    items: T[]
    onClick: <T extends string | number | User>(value: T) => void
}


export const List = <T extends string | number | User>({items, onClick} : ListProps<T>) => {
    return (
        <div>
            {items.map((item, index) => {
                if (typeof item === "object") {
                    return (
                        <div key={item.id} onClick={() => onClick(item.first + ' ' + item.last)}>
                            {item.first} {item.last}
                        </div>
                    )
                }
                return (
                    <div key={index} onClick={() => onClick(item)}>
                        {item}
                    </div>
                )
            })}
        </div>
    )
}