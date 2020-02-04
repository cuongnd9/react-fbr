import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshToHome } from './action';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshToHome());
  }, []);
  return (
    <div>
      <Link to="/screen1">Screen 1</Link>
      <br />
      <Link to="/screen2">Screen 2</Link>
    </div>
  )
};

export default Home;
