export const PIECE_TYPES = {
  square: 'square',
  triangle: 'triangle',
  circle: 'circle',
  ruby: 'ruby',
  python: 'python',
};

const PIECES = {
  [PIECE_TYPES.triangle]: {
    pieceType: PIECE_TYPES.triangle,
    color: 'orange',
    content: 'Piece 1 Triangle',
  },
  [PIECE_TYPES.square]: {
    pieceType: PIECE_TYPES.square,
    color: 'lightpink',
    content: 'Piece 2 square',
  },
  [PIECE_TYPES.circle]: {
    pieceType: PIECE_TYPES.circle,
    color: 'forestgreen',
    content: 'Piece 3 circle',
  },
  [PIECE_TYPES.ruby]: {
    pieceType: PIECE_TYPES.ruby,
    color: 'darkorchid',
    content: 'Piece 4 ruby',
  },
  [PIECE_TYPES.python]: {
    pieceType: PIECE_TYPES.python,
    color: 'darkorange',
    content: 'Piece 5 python',
  },
};

export default PIECES;
