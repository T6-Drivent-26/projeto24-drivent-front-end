import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import Tile from '../Dashboard/Tile';

export default function TicketSelect() {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState();

  useEffect(() => {
    const URL = process.env.REACT_APP_API_BASE_URL;
    const promise = axios.get(`${URL}/tickets/categories`);

    promise.then((response) => {
      const { data } = response;
      setCategories(data);
    });

    promise.catch((err) => {
      const message = err.response.statusText;
      alert(message);
    });
  }, []);

  function createTicketCategories() {
    return categories.map((ticketCategory) => {
      const { id, category, price } = ticketCategory;
      return (
        <Tile
          key={id}
          category={category}
          price={price}
          active={ticketCategory === selected}
          onClick={() => setSelected(ticketCategory)}
        />
      );
    });
  }

  const ticketCategories = createTicketCategories();

  return (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      <TicketInstruction>Primeiro, escolha sua modalidade de ingresso</TicketInstruction>
      <TicketOptions>{ticketCategories}</TicketOptions>
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
