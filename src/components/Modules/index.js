import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { addPieceAction } from "../../reducers/gameReducer";
import { PIECE_TYPES } from "../PIECES_SHAPES";

const Asset = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${props => props.color};
`;

export const Module1 = () => {
  const pieceType = PIECE_TYPES.triangle;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addPieceAction(pieceType));
  }, []);
  return (
    <Asset color="aquamarine">
      <h3>Module 1</h3>
    </Asset>
  );
};

export const Module2 = () => {
  const pieceType = PIECE_TYPES.square;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addPieceAction(pieceType));
  }, []);
  return (
    <Asset color="salmon">
      <h3>Module 2</h3>
    </Asset>
  );
};

export const Module3 = () => {
  const pieceType = PIECE_TYPES.circle;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addPieceAction(pieceType));
  }, []);
  return (
    <Asset color="tomato">
      <h3>Module 3</h3>
    </Asset>
  );
};
