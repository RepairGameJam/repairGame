import React from 'react';
import styled from 'styled-components';

const Asset = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${props => props.color};s
`;

export const Piece1 = ({ onClick }) => (
  <Asset color="orange" onClick={onClick}>
    <h3>Piece 1 Triangle</h3>
  </Asset>
);

export const Piece2 = ({ onClick }) => (
  <Asset color="lightpink" onClick={onClick}>
    <h3>Piece 2 square</h3>
  </Asset>
);

export const Piece3 = ({ onClick }) => (
  <Asset color="forestgreen" onClick={onClick}>
    <h3>Piece 3 circle</h3>
  </Asset>
);

export const Piece4 = ({ onClick }) => (
  <Asset color="darkorchid" onClick={onClick}>
    <h3>Piece 4 ruby</h3>
  </Asset>
);

export const Piece5 = ({ onClick }) => (
  <Asset color="darkorange" onClick={onClick}>
    <h3>Piece 5 python</h3>
  </Asset>
);
