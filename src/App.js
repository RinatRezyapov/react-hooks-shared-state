import React from "react";

import { useSharedState } from "./index";

import Child from "./Child";

const App = () => {
  const [value, setValue] = useSharedState();

  const onIncrement = () => {
    setValue(value + 1);
  };

  const onDecrement = () => {
    setValue(value - 1);
  };

  return (
    <div>
      {value}
      <div>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
      <Child />
    </div>
  );
};

export default App;
