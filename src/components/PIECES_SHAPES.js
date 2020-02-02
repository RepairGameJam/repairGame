import { Piece1, Piece2, Piece3, Piece4, Piece5 } from './Pieces';

export const PIECE_TYPES = {
  square: 'square',
  triangle: 'triangle',
  circle: 'circle',
  ruby: 'ruby',
  python: 'python',
};

const PIECES = {
  [PIECE_TYPES.triangle]: Piece1,
  [PIECE_TYPES.square]: Piece2,
  [PIECE_TYPES.circle]: Piece3,
  [PIECE_TYPES.ruby]: Piece4,
  [PIECE_TYPES.python]: Piece5,
};

export default PIECES;
