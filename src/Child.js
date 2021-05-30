import React,{useContext} from 'react'
import ValueContext from './ValueContext'

export default function Child() {
    let value=useContext(ValueContext);
    return (
        <div>
            Child number {value}
            <button onClick={()=>{value[1](1+value[0])}}>Update number</button>
        </div>
    )
}
