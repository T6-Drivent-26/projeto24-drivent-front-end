import styled from 'styled-components';

export default function Tile({ category, price, active, onClick }) {
  return (
    <TileDiv active={active} category={category} price={price} onClick={onClick}>
      <h1>{category}</h1>
      <h2>R${price}</h2>
    </TileDiv>
  );
}

const TileDiv = styled.button`
  height: 145px;
  width: 145px;
  border-radius: 20px;
  border: 1px solid #cecece;
  background-color: transparent;
  cursor: pointer;

  margin-right: 25px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${(props) => (props.active ? 'background-color: #FFEED2;' : '')}

  &:hover {
    background-color: #ffeed2;
  }
  h1 {
    font-family: 'Roboto', sans-serif !important;
    font-weight: 400 !important;
    font-size: 16px !important;
    text-align: center !important;
    color: #454545 !important;
  }
  h2 {
    font-family: 'Roboto', sans-serif !important;
    font-weight: 400 !important;
    font-size: 14px !important;
    text-align: center !important;
    color: #898989 !important;
    margin-top: 0px !important;
  }
`;
