import React from 'react';
import Header from './components';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    // Iniciando
    return (
      <div>
        <Header />
        <SolarSystem />
      </div>
    );
  }
}

export default App;
