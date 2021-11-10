import './App.css';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch() 
  return (
    <div>
      <div>Counter: {counter} </div>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>INCREMENT</button>
      <button onClick={() => dispatch({type:'DECREMENT'})}>DECREMENT</button>
    </div>
  )
}

export default App;
