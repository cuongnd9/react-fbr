import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveScreen1Data } from './action';

const Screen1 = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const data = useSelector(state => state.screen1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [doRemember, setDoRemember] = useState(false);

  useEffect(() => {
    if (history.action === 'POP') {
      alert('lalala...')
      setEmail(data.email);
      setPassword(data.password);
      setDoRemember(data.doRemember)
    }
  }, [history.action]);

  const handleSave = () => {
    dispatch(saveScreen1Data({
      email,
      password,
      doRemember
    }))
  }
  return (
    <div>
      <h1>Screen 1</h1>
      <Link to='/home'>Home</Link>
      <Link to='/screen2'>Screen 2</Link>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password" id="password" />
        </div>
        <div className="form-group form-check">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" checked={doRemember} onChange={e => setDoRemember(e.target.checked)} /> Remember me
          </label>
        </div>
        <Link to='/screen2' onClick={handleSave}>Screen 2</Link>
      </form>
    </div>
  )
}

export default Screen1;
