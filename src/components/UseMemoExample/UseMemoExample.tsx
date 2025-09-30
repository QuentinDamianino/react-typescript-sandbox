import { useMemo, useState } from 'react'
import '../App.css';
import { initialItems } from '../utils/utils';

const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(() => items.find((item) => item.isSelected), [items]);

  return (
    <>
      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItem?.id}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export default UseMemoExample;
