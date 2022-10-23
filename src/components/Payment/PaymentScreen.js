import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Tile from '../Dashboard/Tile';

export default function PaymentScreen() {
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
          onClick={() => selectCategory(ticketCategory)}
        />
      );
    });
  }

  function selectCategory(ticketCategory) {
    const { category, price } = ticketCategory;

    setSelected(ticketCategory);
    setCategory(category);
    setPrice(price);
  }

  function toPaymentOptions() {
    alert('Tela de pagamentos em desenvolvimento');
  }

  function createCategorySummary() {
    if (category === 'Online') {
      return (
        <TicketInstruction>
          <h2>
            Fechado! O total ficou em <span>R${price}</span>. Agora é só confirmar
          </h2>
          <button onClick={() => toPaymentOptions()}>RESERVAR INGRESSO</button>
        </TicketInstruction>
      );
    }
  }

  const ticketCategories = createTicketCategories();
  const categorySummary = createCategorySummary();

  return (
    <>
      <TicketInstruction>
        <h2>Primeiro, escolha sua modalidade de ingresso</h2>
      </TicketInstruction>
      <TicketOptions>{ticketCategories}</TicketOptions>
      <div>{categorySummary}</div>
    </>
  );
}

const TicketInstruction = styled.div`
  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #8e8e8e;
    margin: 37px 0 17px 0;

    span {
      font-weight: 600;
    }
  }

  button {
    width: 162px;
    height: 37px;
    background: #e0e0e0;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;

    color: #000000;
  }
`;

const TicketOptions = styled.div`
  display: flex;
`;