import React from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Auth />
        <UserProfile />
        <Counter />
      </React.Fragment>
    );
  }
}

export default App;
