import React from 'react';
import styled from './home.module.css'; // styled-components 임포트
import StatusBar from './StatusBar';
import NavigationBar from './NavigationBar';
import Header from './Header';
import MainContent from './HomeMain';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
