import Tile from '../../../components/Dashboard/Tile';
import styled from 'styled-components';

export default function Payment() {
  return (
    <>
      <h1>Ingresso e pagamento</h1>
      <h2>Primeiro, escolha sua modalidade de ingresso</h2>
      <Tiles>
        <Tile price="250,00" title="title"></Tile>
        <Tile price="250,00" title="title"></Tile>
      </Tiles>
    </>
  );
}

const Tiles = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  `;
