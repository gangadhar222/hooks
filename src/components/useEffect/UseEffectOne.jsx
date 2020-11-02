import React, { useEffect, useState } from "react";

export default function UseEffectOne() {
  const [count, setCount] = useState(0);
//   this useEffect will be called after every render simply saying its a combo of componentDidMount and componentDidUpdate
  useEffect(() => {
      document.title = `You clicked ${count} times`
  });
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count is {count}
      </button>
    </div>
  );
}
