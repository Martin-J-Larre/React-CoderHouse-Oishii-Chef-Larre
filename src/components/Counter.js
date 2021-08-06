import React, { useState } from 'react';
import {FaPlus, FaMinus, FaRegTrashAlt } from "react-icons/fa";

const Counter = () => {
   
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }
    return(
        <>
            <div className="counter_container">
                <p>{count}</p> 
                <button onClick={increment}><FaPlus /></button>
                <button onClick={decrement}><FaMinus /></button>
                <button onClick={reset}><FaRegTrashAlt /> </button>
            </div>
        </>
    );
}
export default Counter;