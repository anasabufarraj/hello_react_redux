import React from 'react';
import { useSelector } from 'react-redux';
import Counter from './components/Counter';
import Header from './components/Header';
import LogIn from './components/LogIn';
import UserProfile from './components/UserProfile';

function App() {
  const isAuth = useSelector((state) => state['auth'].isAuth);

  return (
    <React.Fragment>
      <Header />
      {!isAuth && <LogIn />}
      {isAuth && <UserProfile />}
      {/*<Counter />*/}
    </React.Fragment>
  );
}

export default App;
