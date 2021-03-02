import {FC} from 'react'

export type User = {
    id: string
    name: string
}

type Props = {
    strings: Array<User>
}


const ListOfStrings: FC<Props> = (props) => {
    return (
        <ul>
            {props.strings.map((user) => <li key={user.id}>{user.name}</li>)}
        </ul>
    )
}

export default ListOfStrings
