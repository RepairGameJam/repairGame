import { combineReducers } from "redux";
import clientReducer from "./clientReducer";
import gameReducer from "./gameReducer";

const rootReducer = combineReducers({
  game: gameReducer,
  client: clientReducer
});

export default rootReducer;
