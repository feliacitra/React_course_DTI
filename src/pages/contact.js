import React from 'react';
import useTitle from '../utility/customHook';
const Contact = () => {
  const [count, setCount] = useTitle();

  return (
    <div>
      {' '}
      <h2>Hai ini Contact Saya</h2>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        COntact Me
      </button>
    </div>
  );
};
export default Contact;
