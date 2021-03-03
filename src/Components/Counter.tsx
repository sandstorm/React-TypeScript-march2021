import {FC, memo} from 'react'
import {Route} from 'react-router'
import useCounter from './hooks/useCounter'

type Props = {
    initialCount?: number
    step?: number
}

const Counter: FC<Props> = (props) => {
    const {count, increment, decrement} = useCounter(props.initialCount, props.step)

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={decrement}> - </button>
            <button onClick={increment}> + </button>

            <Route path="/counter/foo">
                <p>FOOOO</p>
            </Route>
        </div>
    )
}

export default memo(Counter)
