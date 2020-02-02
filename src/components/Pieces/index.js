import React from 'react';
import styled from 'styled-components';

const Asset = styled.div`
  width: 100px;
  height: 100px;
`;

const Image = styled.div`
  height: 100%;
  background-image: url(${props => props.imageUrl});
  background-repeat: no-repeat;
  background-position: center;
`;

export const Piece1 = ({ onClick }) => (
  <Asset color="orange" onClick={onClick}>
    <Image imageUrl="pieces/master-chip-1.svg" />
  </Asset>
);

export const Piece2 = ({ onClick }) => (
  <Asset color="lightpink" onClick={onClick}>
    <Image imageUrl="pieces/master-chip-2.svg" />
  </Asset>
);

export const Piece3 = ({ onClick }) => (
  <Asset color="forestgreen" onClick={onClick}>
    <Image imageUrl="pieces/master-chip-3.svg" />
  </Asset>
);

export const Piece4 = ({ onClick }) => (
  <Asset color="darkorchid" onClick={onClick}>
    <Image imageUrl="pieces/master-chip-4.svg" />
  </Asset>
);

export const Piece5 = ({ onClick }) => (
  <Asset color="darkorange" onClick={onClick}>
    <Image imageUrl="pieces/master-chip-5.svg" />
  </Asset>
);
