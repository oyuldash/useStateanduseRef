import React, { useRef, useState } from "react";

export default function UseStateVSUseRef() {
  const [count, setCount] = useState(0);

  const countRef = useRef(0);

  const handleIncrement = () => {
    setCount(count + 1);
    countRef.current++;
    console.log("State count", count);
    console.log("Ref count", countRef);
  };

  return (
    <div>
      <h1>UseStateVSUseRef</h1>
      <h2>Count:{countRef.current}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
