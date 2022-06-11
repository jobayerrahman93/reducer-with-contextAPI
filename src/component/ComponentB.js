import React from 'react';
import { UseCountContext } from './useCountContext';

const ComponentB = () => {

    // const {count,discpatch} =useCountContext();
    // console.log(count);

const {count,dispatch} = UseCountContext();
console.log(count);
    

    return (
        <div>
            <h1>This is component B</h1>

            <h1>{count}</h1>


            <button onClick={()=>{
                dispatch({ type:'increment'})
            }} type='button'> increment by 1</button>
            <button onClick={()=>{
                dispatch({type:'decrement'})
            }} type='button'> decrement by 1</button>
          
        </div>
    );
};

export default ComponentB;