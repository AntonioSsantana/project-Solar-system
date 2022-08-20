import React from 'react';
import Header from './Header';
import SolarSystem from './SolarSystem';

class Index extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <SolarSystem />
      </section>
    );
  }
}

export default Index;
