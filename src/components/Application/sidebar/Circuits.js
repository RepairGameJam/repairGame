import React from 'react';
import styled from 'styled-components';

const CircuitsWrapper = styled.div`
  flex-grow: 3;
  background-color: rgba(196, 196, 196, 1);
  margin: 2em;
  border-radius: 20px;
`;

const Header = styled.h3`
  text-align: center;
  margin-top: 2em;
`;

const Circuits = () => (
  <CircuitsWrapper>
    <Header>Circuit Parts</Header>
  </CircuitsWrapper>
);

export default Circuits;
