import { useContext } from 'react';
import styled from 'styled-components';

import EventInfoContext from '../../contexts/EventInfoContext';

import NavigationBar from '../../components/Dashboard/NavigationBar';

import DashboardLayout from '../../layouts/Dashboard';
import Tile from '../../components/Dashboard/Tile';

export default function Dashboard() {
  const { eventInfo } = useContext(EventInfoContext);

  return (
    <DashboardLayout background={eventInfo.backgroundImageUrl}>
      <NavigationBar />

      <Container>
        <h1>Ingresso e pagamento</h1>
        <h2>Primeiro, escolha sua modalidade de ingresso</h2>
        <Tiles>
          <Tile price="250,00" title="title"></Tile>
          <Tile price="250,00" title="title"></Tile>
        </Tiles>
      </Container>
    </DashboardLayout>
  );
}

const Container = styled.div`
  padding: 30px;
  height: 100%;
  width: 100%;
  overflow-y: auto;

  @media (max-width: 600px) {
    height: calc(100vh - 80px);
    padding: 20px;
  }

  h1{
    font-family: 'Roboto', sans-serif;
    font-size: 34px;    
    font-weight: 400;       
    text-align: left;
  }

  h2{
    font-family: 'Roboto', sans-serif;
    font-size: 20px;    
    font-weight: 400;       
    text-align: left;
    color: #8E8E8E;
    margin-top: 35px;
  }
`;

const Tiles = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  `;

