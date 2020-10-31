import React, { useState } from 'react';
import useTitle from '../utility/customHook';

// function Home() {}
const Home = () => {
  const [myNumber, setMyNumber] = useState(0);
  const [count, setCount] = useTitle();
  //akan di eksekusi jika komponen useEffect di render
  return (
    <div>
      <h1>Welcome Home!</h1>
      {/* <p>You Clicked {count} times</p> */}
      <button type="button" onClick={() => setCount(count + 1)}>
        click UseEffect
      </button>
      <button type="button" onClick={() => setMyNumber(myNumber + 1)}>
        click Usestate
      </button>
      <h2> {myNumber}</h2>
    </div>
  );
};
export default Home;
