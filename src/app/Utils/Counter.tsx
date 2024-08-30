"use client";

import { useState, useEffect, useCallback } from "react";

interface CounterSettings {
  counterText: string;
}

export default function Counter({ counterText }: CounterSettings) {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const increment = useCallback(() => {
    return setCount(count + 1);
  }, [count]);

  //   function increment() {
  //     return setCount(count + 1);
  //   }

  const decrement = useCallback(() => {
    if (count === 0) return;
    return setCount(count - 1);
  }, [count]);

  //   function decrement() {
  //     if (count === 0) return;
  //     return setCount(count - 1);
  //   }

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h3>{text}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h1>
        {counterText}:{count}
      </h1>
    </>
  );
}
