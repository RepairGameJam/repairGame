import React from "react";
import "./index.scss";

const MainScreen = () => {
  const createRoom = () => {};

  const joinRoom = () => {};

  return (
    <div className="container">
      <button className="btn" type="button">
        Create Game
      </button>
      <form>
        <input></input>
        <button className="btn" type="submit">
          JOIN GAME
        </button>
      </form>
    </div>
  );
};

export default MainScreen;
