import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import Tile from '../Dashboard/Tile';

export default function TicketSelect() {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();

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
          onClick={() => clickClick(ticketCategory)}
        />
      );
    });
  }

  function clickClick(ticketCategory) {
    const { category, price } = ticketCategory;

    setSelected(ticketCategory);
    setCategory(category);
    setPrice(price);
  }

  function createCategorySummary() {
    if (category === 'Online') {
      return (
        <>
          <div>
            <TicketInstruction>Fechado! O total ficou em R${price}. Agora é só confirmar</TicketInstruction>
          </div>
          <div>
            <button>RESERVAR INGRESSO</button>
          </div>
        </>
      );
    }
  }

  const ticketCategories = createTicketCategories();
  const categorySummary = createCategorySummary();

  return (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      <TicketInstruction>Primeiro, escolha sua modalidade de ingresso</TicketInstruction>
      <TicketOptions>{ticketCategories}</TicketOptions>
      <div>{categorySummary}</div>
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
