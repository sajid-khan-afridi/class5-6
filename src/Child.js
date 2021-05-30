import React,{useContext} from 'react'
import ValueContext from './ValueContext'

export default function Child() {
    let value=useContext(ValueContext);
    return (
        <div>
            Child number {value}
        </div>
    )
}
