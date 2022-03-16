import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

import { actions } from './store/index'

function App() {
  const counter = useSelector((state) => state.counter)

  const dispatch = useDispatch();

  const increment = () => {
       dispatch(actions.increment())
  }
  const decrement = () => {
    dispatch(actions.decrement())
  }
  const addBy = () => {
    dispatch(actions.addBy(50))
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={addBy}>Add Value</button>
    </div>
  );
}

export default App;
