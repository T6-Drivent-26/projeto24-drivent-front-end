import React from 'react';
import { useState } from 'react';
import Cards from 'react-credit-cards';
import styled from 'styled-components';
import 'react-credit-cards/es/styles-compiled.css';
 
export default function Card() {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');

  function confirmPayment() {
    const payment = {
      number: number
    };
  }

  return (
    <CardContainer>
      <Cards
        cvc={cvc}
        expiry={expiry}
        focused={focus}
        name={name}
        number={number}
      />
      <form>
        <input
          type='tel'
          name='number'
          val={number}
          placeholder={'Enter Number'}
          onChange={e => setNumber(e.target.value)}
          onFocus={ e => setFocus(e.target.name)}
        />
        <input
          type='tel'
          name='name'
          val={name}
          placeholder={'Enter Name'}
          onChange={e => setName(e.target.value)}
          onFocus={ e => setFocus(e.target.name)}
        />
        <input
          className='valid'
          type='tel'
          name='expiry'
          val={expiry}
          placeholder={'Enter Expiry date'}
          onChange={e => setExpiry(e.target.value)}
          onFocus={ e => setFocus(e.target.name)}
        />
        <input
          className='cvc'
          type='tel'
          name='cvc'
          val={cvc}
          placeholder={'Enter Cvc'}
          onChange={e => setCvc(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />
      </form>
      <button onClick={() => confirmPayment()}>FINALIZAR PAGAMENTO</button>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  align-items: flex-start;

  button{
    width: 200px;
    height: 37px;
    position: absolute;
    left: 380px;
    bottom: 100px;
    background-color: #e0e0e0;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: center;

    color: #000000;
  }

  .cvc{
    width: 115px !important;
    margin-right: 0px !important;
  }
  .valid{
    width: 250px !important;
    margin-right: 5px !important;
  }
  input{
    width: 400px;
    height: 45px;
    border-radius: 5px;
    margin-left: 30px;
    margin-bottom: 20px;
    border-width: 1px;
    font-size: 20px;
    text-align: center;
    ::placeholder{
      font-size: 20px;
      text-align: center;
    }
  }
`;
