import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import TicketSelect from './TicketSelection';

export default function SelectTicketOptions() {
  return (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      <TicketSelect />
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
