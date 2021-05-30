import React, { useReducer } from 'react'
import numberReducer from './numberReducer'


export default function Child2() {
    let [state, dispatch]=useReducer(numberReducer, 52)
    return (
        <div>
            Child2 {state}
            <button onClick={()=>{dispatch({type:'INCREMENT',val:5})}}>Increment</button>
            <button onClick={()=>{dispatch({type: 'DECREMENT',val:5})}}>Increment</button>
        </div>
    )
}
