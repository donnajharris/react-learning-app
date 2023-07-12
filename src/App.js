import './App.css';
/* exercise 1 */
// import React, { useState } from "react";
// import CounterButton from "./CounterButton";
// import ResetButton from './ResetButton';

/*exercise 2 */
import Todo from './Todo';

const App = () => {

  /* exercise 1 */

  // const [count, setCount] = useState(0);

  // const handleReset = () => {
  //   setCount(0);
  // };

  // return (
  //   <div className="wrapper">
  //     <CounterButton count={count} setCount={setCount} />
  //     <ResetButton onReset={handleReset} />
  //   </div>
  // );

  /* exercise 2 */
  return (
    <div>
      <Todo />
    </div>
  );
  
};

export default App;