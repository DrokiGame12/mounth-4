import React from "react";
import { useState } from "react";

function CounterPage() {
    const [count, setCount] = useState(0)

    const counterAction = (number) => {
        if(count + number >= 0){
            setCount(count + number)
        } else {
            setCount(0)
        }
    }

    
    return (
        <div>
            <h1>{ count }</h1>
            <button onClick={() => counterAction(1)}>+1</button>
            <button onClick={() => counterAction(-1)}>-1</button>
            <button onClick={() => counterAction(10)}>+10</button>
            <button onClick={() => counterAction(-10)}>-10</button>
            <button onClick={() => counterAction(-count)}>reset</button>
        </div>
    )
}

export default CounterPage