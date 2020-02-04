import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to="/screen1">Screen 1</Link>
      <br />
      <Link to="/screen2">Screen 2</Link>
    </div>
  )
};

export default Home;
