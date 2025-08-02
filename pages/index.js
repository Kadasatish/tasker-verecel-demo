import { useState, useEffect } from "react";

export default function Home() {
  const [val, setVal] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('/api/value')
        .then(r => r.json())
        .then(d => setVal(d.stored || ""));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <h1>Tasker Value: {val}</h1>
    </main>
  );
    }
