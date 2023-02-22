import React, { useState,type FC } from 'react';

const Foo: FC<{ title: string }> = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => {
        setCount(2)
      }}>test</button>
      {count}
    </div>
  )
};

export default Foo;
