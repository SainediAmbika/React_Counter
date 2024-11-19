import React, { useState } from 'react';
import './FunctionalCompCount.css';

function FunctionalCompCount(){
const [count, setCount] = useState(0);
const increase = () => setCount( count + 1);
const decrease = () => setCount( count - 1);
const reset =() => setCount({count:0})
return (
    <div className='functionalcounter'>
        <button onClick={increase}>+</button>
        <h4>Count:{count}</h4>
        <button onClick={decrease}>-</button>
        <br></br>
        <button onClick={reset}>Reset</button>
    </div>
)
}
export default FunctionalCompCount;