Demo:
https://codesandbox.io/s/github/RinatRezyapov/react-hooks-shared-state

```
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
```

Create and export shared state:

```export const useSharedState = createSharedState(0);```

Import as:

```const [value, setValue] = useSharedState();```
