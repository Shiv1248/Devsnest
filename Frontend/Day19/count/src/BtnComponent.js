import React from 'react'
import { useState } from 'react';

const BtnComponent = () => {
    const [count, setcount] = useState(0);
    return (
      <div>
        <button onClick={() => setcount(count + 1)}> {count}</button>
      </div>
    );
}

export default BtnComponent