import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const createSharedState = defaultValue => {
  let listeners = [];

  const setSharedState = value => {
    listeners.forEach((listener, idx) => listener(value));
  };

  return () => {
    const [value, setVal] = React.useState(defaultValue);
    React.useEffect(() => {
      listeners.push(setVal);
      return () => {
        listeners.splice(-1, 1);
      };
    });
    return [value, setSharedState];
  };
};

export const useSharedState = createSharedState(0);

ReactDOM.render(<App />, document.getElementById("root"));
