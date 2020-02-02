import React from "react";
import { Piece1, Piece2, Piece3 } from "./Pieces";

export const PIECE_TYPES = {
  square: "square",
  triangle: "triangle",
  circle: "circle"
};

const PIECES = {
  [PIECE_TYPES.triangle]: Piece1,
  [PIECE_TYPES.square]: Piece2,
  [PIECE_TYPES.circle]: Piece3
};

export default PIECES;
