import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSytem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSytem />
        <Missions />
      </>
    );
  }
}
export default App;
