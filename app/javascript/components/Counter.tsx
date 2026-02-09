import React, { useState } from 'react'

interface CounterProps {
  initialCount?: number
}

const Counter: React.FC<CounterProps> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState<number>(initialCount)

  return (
    <div style={{ padding: '20px', border: '2px solid #4CAF50', borderRadius: '8px', maxWidth: '300px' }}>
      <h2>React + TypeScript Counter</h2>
      <p style={{ fontSize: '48px', textAlign: 'center', margin: '10px 0' }}>{count}</p>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={() => setCount(count - 1)}>- 1</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>+ 1</button>
      </div>
    </div>
  )
}

export default Counter
