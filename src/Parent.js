import React from 'react'
import Child from './Child';

export default function Parent(props) {
    return (
        <div>
            Parent.js
            <Child num={props.num}></Child>
        </div>
    )
}
