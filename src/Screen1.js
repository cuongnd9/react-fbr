import React from 'react';
import { Link } from 'react-router-dom';

const Screen1 = () => {
  return (
    <div>
      <h1>Screen 1</h1>
      <Link to='/screen2'>Screen 2</Link>
    </div>
  )
}

export default Screen1;
