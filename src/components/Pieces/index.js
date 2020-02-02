import React from 'react';
import styled from 'styled-components';

const Asset = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${props => props.color};s
`;

export const Piece1 = () => (
  <Asset color="orange">
    <h3>Piece 1 Triangle</h3>
  </Asset>
);

export const Piece2 = () => (
  <Asset color="lightpink">
    <h3>Piece 2 square</h3>
  </Asset>
);

export const Piece3 = () => (
  <Asset color="forestgreen">
    <h3>Piece 3 circle</h3>
  </Asset>
);

export const Piece4 = () => (
  <Asset color="darkorchid">
    <h3>Piece 4 circle</h3>
  </Asset>
);

export const Piece5 = () => (
  <Asset color="darkorange">
    <h3>Piece 5 circle</h3>
  </Asset>
);
