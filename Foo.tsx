import React, { useState, startTransition, Suspense, useEffect } from 'react';

export const ConcurrentMode: React.FC = () => {
  const [input, setInput] = useState('');
  const handleChange = (nextInput: string) => {
    startTransition(() => {
      setInput(nextInput);
    });
  };

  return <input value={input} onChange={e => handleChange(e.target.value)} />;
};

export const AutomaticBatching: React.FC = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  setTimeout(() => {
    setCount(count + 1);
    setText('Updated text');
  }, 1000);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Text: {text}</p>
    </div>
  );
};

export const CreateRoot: React.FC = () => {
  return <div>CreateRoot component simulates the root creation and rendering process.</div>;
};

export const SuspenseForDataFetching: React.FC = () => {
  const fetchData = () => "Data loaded with Suspense.";
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>{fetchData()}</div>
    </Suspense>
  );
};

export const EnhancedHooks: React.FC = () => {
  useEffect(() => {
    console.log('Effect has run');
  }, []);

  return <div>EnhancedHooks component demonstrates useEffect optimization.</div>;
};
