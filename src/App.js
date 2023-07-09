import './App.css';
import React from "react";
import CounterButton from "./CounterButton";
import ResetButton from './ResetButton';

const App = () => {

  return (
    <div class="wrapper">
      <CounterButton />
      <ResetButton />
    </div>
  );
};

export default App;