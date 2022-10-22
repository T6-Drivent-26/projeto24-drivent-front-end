import styled from 'styled-components';

export default function TicketSelection() {
  return (
    <>
      <TicketContainer>
        <TicketType>Temp text</TicketType>
        <TicketPrice>Temp price</TicketPrice>
      </TicketContainer>
    </>
  );
}

const TicketContainer = styled.div`
  width: 145px;
  height: 145px;
  border: 1px solid #cecece;
  border-radius: 20px;
  margin: 0 24px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TicketType = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #454545;
  margin: 0 0 3px 0;
`;

const TicketPrice = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #898989;
`;
