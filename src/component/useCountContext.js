import React, { useContext, useReducer } from 'react';

export const CountContext = React.createContext();

const initialState={
    count:1
}

const reducer=(state,action)=>{
    switch (action.type){
        case 'increment':
            return {...state,count:state.count + 1}

        case 'decrement':
            return {...state,count:state.count - 1}

    }
}
const ContextProvider = ({children}) => {

const [state,dispatch]=useReducer(reducer,initialState);

    return (
        <CountContext.Provider value={{...state,dispatch}}>
            {children}
        </CountContext.Provider>
    );
};

export const UseCountContext =()=>{
  return useContext(CountContext)
}

export default ContextProvider;