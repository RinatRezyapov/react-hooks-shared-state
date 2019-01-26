import React from "react";

import { useSharedState } from "./index";

const Child = () => {
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
    </div>
  );
};

export default Child;
