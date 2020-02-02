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
    imageUrl: 'pieces/master-chip-1.svg',
  },
  [PIECE_TYPES.square]: {
    pieceType: PIECE_TYPES.square,
    imageUrl: 'pieces/master-chip-2.svg',
  },
  [PIECE_TYPES.circle]: {
    pieceType: PIECE_TYPES.circle,
    imageUrl: 'pieces/master-chip-3.svg',
  },
  [PIECE_TYPES.ruby]: {
    pieceType: PIECE_TYPES.ruby,
    imageUrl: 'pieces/master-chip-4.svg',
  },
  [PIECE_TYPES.python]: {
    pieceType: PIECE_TYPES.python,
    imageUrl: 'pieces/master-chip-5.svg',
  },
};

export default PIECES;
