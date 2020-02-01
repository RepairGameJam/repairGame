const initialState = {
  score: 0,
  requiredPieces: [],
  level: {}
};

const START = "START_GAME";
const ADD_PIECE = "ADD_PIECE";
const ADD_SCORE = "ADD_SCORE";

export const startGameAction = level => ({
  type: START,
  level
});

export const addPieceAction = piece => ({
  type: ADD_PIECE,
  piece
});

export const addScoreAction = score => ({
  type: ADD_SCORE,
  score
});

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case START:
      return {
        score: 0,
        requiredPieces: [],
        level: action.level
      };
    case ADD_SCORE:
      return {
        ...state,
        score: state.score + action.score
      };
    case ADD_PIECE:
      return {
        ...state,
        requiredPieces: [...state.requiredPieces, action.piece]
      };
    default:
      return state;
  }
};

export default gameReducer;
