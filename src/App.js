import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
/* import PlanetCard from './components/PlanetCard';
import Planets from './data/planets'; */

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
      </div>
    );
  }
}

export default App;
