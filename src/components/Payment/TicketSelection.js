import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './CreditCardComponent';

import Tile from '../Dashboard/Tile';

export default function TicketSelect() {
  const [categories, setCategories] = useState([]);
  const [accommodations, setAccommodations] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(
    JSON.parse(window.localStorage.getItem('selectedCategoryId')) || null
  );
  const [selectedAccommodation, setSelectedAccommodation] = useState(
    JSON.parse(window.localStorage.getItem('selectedAccommodationId')) || null
  );
  const [category, setCategory] = useState(window.localStorage.getItem('category') || null);
  const [categoryPrice, setCategoryPrice] = useState(JSON.parse(window.localStorage.getItem('categoryPrice')) || null);
  const [accommodation, setAccommodation] = useState(window.localStorage.getItem('accommodation') || null);
  const [accommodationPrice, setAccommodationPrice] = useState(
    JSON.parse(window.localStorage.getItem('accommodationPrice')) || null
  );
  const [toggle, setToggle] = useState(true);

  const URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const promise = axios.get(`${URL}/tickets/categories`);

    promise.then((response) => {
      const { data } = response;
      setCategories(data);
    });

    promise.catch((err) => {
      const message = err.response.statusText;
      alert(message);
    });
  }, [toggle]);

  useEffect(() => {
    const promise = axios.get(`${URL}/tickets/accommodations`);

    promise.then((response) => {
      const { data } = response;
      setAccommodations(data);
    });

    promise.catch((err) => {
      const message = err.response.statusText;
      alert(message);
    });
  }, [toggle]);

  function createTicketCategories() {
    return categories.map((ticketCategory) => {
      const { id, category, price } = ticketCategory;
      return (
        <Tile
          key={id}
          category={category}
          price={price}
          active={ticketCategory.id === selectedCategory}
          onClick={() => selectCategory(ticketCategory)}
        />
      );
    });
  }

  function createTicketAccommodations() {
    return accommodations.map((ticketAccommodation) => {
      const { id, accommodation, price } = ticketAccommodation;
      return (
        <Tile
          key={id}
          accommodation={accommodation}
          price={price}
          active={ticketAccommodation.id === selectedAccommodation}
          onClick={() => selectAccommodation(ticketAccommodation)}
        />
      );
    });
  }

  function selectCategory(ticketCategory) {
    const { category, price } = ticketCategory;
    setSelectedCategory(ticketCategory.id);
    setCategory(category);
    setCategoryPrice(price);
    setSelectedAccommodation();
    setAccommodation();
    setAccommodationPrice();
    window.localStorage.removeItem('selectedAccommodationId');
    window.localStorage.removeItem('accommodation');
    window.localStorage.removeItem('accommodationPrice');
    window.localStorage.setItem('selectedCategoryId', ticketCategory.id);
    window.localStorage.setItem('category', category);
    window.localStorage.setItem('categoryPrice', price);
  }

  function selectAccommodation(ticketAccommodation) {
    const { accommodation, price } = ticketAccommodation;
    setSelectedAccommodation(ticketAccommodation.id);
    setAccommodation(accommodation);
    setAccommodationPrice(price);
    window.localStorage.setItem('selectedAccommodationId', ticketAccommodation.id);
    window.localStorage.setItem('accommodation', accommodation);
    window.localStorage.setItem('accommodationPrice', price);
  }

  function createCategorySummary() {
    if (category === 'Online') {
      return (
        <TicketInstruction>
          <h2>
            Fechado! O total ficou em <span>R${categoryPrice}</span>. Agora é só confirmar
          </h2>
          <button onClick={() => setToggle(false)}>RESERVAR INGRESSO</button>
        </TicketInstruction>
      );
    } else if (category === 'Presencial') {
      return (
        <>
          <TicketInstruction>
            <h2>Ótimo! Agora escolha sua modalidade de hospedagem</h2>
          </TicketInstruction>
          <TicketOptions>{ticketAccommodations}</TicketOptions>
        </>
      );
    }
  }

  function createAccommodationSummary() {
    const totalCost = categoryPrice + accommodationPrice;

    if (accommodation) {
      return (
        <TicketInstruction>
          <h2>
            Fechado! O total ficou em <span>R${totalCost}</span>. Agora é só confirmar
          </h2>
          <button onClick={() => setToggle(false)}>RESERVAR INGRESSO</button>
        </TicketInstruction>
      );
    }
  }

  const ticketCategories = createTicketCategories();
  const ticketAccommodations = createTicketAccommodations();
  const categorySummary = createCategorySummary();
  const accommodationSummary = createAccommodationSummary();

  return (
    <>
      <TicketSelectionContainer toggle={toggle}>
        <TicketInstruction>
          <h2>Primeiro, escolha sua modalidade de ingresso</h2>
        </TicketInstruction>
        <TicketOptions>{ticketCategories}</TicketOptions>
        <div>{categorySummary}</div>
        <div>{accommodationSummary}</div>
      </TicketSelectionContainer>
      <TicketPaymentContainer toggle={toggle}>
        <TicketInstruction>
          <h2>Ingresso escolhido</h2>
        </TicketInstruction>
        <BigTile>
          {accommodationPrice === 0 || category === 'online' ? <h1>{category}</h1> : <h1>{category} + Com Hotel</h1>}
          <h2>{`R$ ${accommodationPrice + categoryPrice}`}</h2>
        </BigTile>
        <TicketInstruction>
          <h2>Pagamento</h2>
        </TicketInstruction>
        <Card></Card>
      </TicketPaymentContainer>
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

const TicketSelectionContainer = styled.div`
  ${(props) => (props.toggle ? 'display: flex;' : 'display: none;')}
  flex-direction: column;
`;

const TicketPaymentContainer = styled.div`
  ${(props) => (props.toggle ? 'display: none;' : 'display: flex;')}
  flex-direction: column;
`;

const BigTile = styled.button` 
  height: 100px;
  width: 300px;
  border-radius: 20px;
  border: 1px solid #cecece;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffeed2;

  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #454545;
  }
  h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: #898989;
    margin-top: 0px;
  }
`;
