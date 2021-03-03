import {FC, useState} from 'react'

const ControlledInput: FC = () => {
    const [value, setValue] = useState('default')

    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setValue(ev.currentTarget.value)
    }

    return <input type="text" value={value} onChange={handleChange} />
}

export default ControlledInput
