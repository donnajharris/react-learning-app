import './App.css';
import React, { useState } from "react";
import CounterButton from "./CounterButton";
import ResetButton from './ResetButton';

const App = () => {

  const [count, setCount] = useState(0);

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="wrapper">
      <CounterButton count={count} setCount={setCount} />
      <ResetButton onReset={handleReset} />
    </div>
  );
};

export default App;