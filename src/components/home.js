import React from 'react';
import StatusBar from './StatusBar';
import NavigationBar from './NavigationBar';
import Header from './Header';
import MainContent from './HomeMain';

function Home() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <StatusBar />
      <Header />
      <MainContent />
      <NavigationBar />
    </div>
  );
}

export default Home;
