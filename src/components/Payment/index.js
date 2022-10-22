import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import Tile from '../Dashboard/Tile';

export default function TicketSelect() {
  return (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      <TicketInstruction>Primeiro, escolha sua modalidade de ingresso</TicketInstruction>
      <TicketOptions>
        <Tile price="250,00" title="title"></Tile>
        <Tile price="250,00" title="title"></Tile>
      </TicketOptions>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const TicketInstruction = styled.h2`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #8e8e8e;
  margin: 37px 0 17px 0;
`;

const TicketOptions = styled.div`
  display: flex;
`;
