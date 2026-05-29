import { useCounter } from "../hooks/useCounter";

const MyCounterApp = () => {
  const { counter, increment, decrement, reset } = useCounter();
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>
        <h1>Counter: {counter}</h1>
        <div style={{ gap: "10px", display: "flex" }}>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default MyCounterApp;
