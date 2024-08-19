import React from 'react';
import StatusBar from './StatusBar';
import NavigationBar from './NavigationBar';
import Header from './Header';
import MainContent from './HomeMain';
import Container from './Container';


function Home() {
  return (
    <Container>
      <StatusBar />
      <Header />
      <MainContent />
      <NavigationBar />
    </Container>
  );
}

export default Home;
