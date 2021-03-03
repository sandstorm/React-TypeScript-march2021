import {FC} from 'react'

export type Props = {
    title?: string
}

const Article: FC<Props> = (props) => {
    const title = props.title ?? 'default title'

    return (
        <>
            <h1>{title}</h1>
            <p>Text</p>
        </>
    )
}

export default Article
