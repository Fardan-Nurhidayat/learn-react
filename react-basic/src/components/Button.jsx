import { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {props.title} {count} kali
    </button>
  );
}
