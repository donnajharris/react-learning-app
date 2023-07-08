import "./App.css";
import * as React from "react";

export default function Counter() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => setCount(count + 3);

  return (
    <div class="wrapper">
      <button onClick={handleClick}>
        {count}
      </button>
    </div>
  )
}